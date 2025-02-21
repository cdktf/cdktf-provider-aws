# `wafv2WebAcl` Submodule <a name="`wafv2WebAcl` Submodule" id="@cdktf/provider-aws.wafv2WebAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Wafv2WebAcl <a name="Wafv2WebAcl" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl aws_wafv2_web_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAcl(scope: Construct, id: string, config: Wafv2WebAclConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig">Wafv2WebAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig">Wafv2WebAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putAssociationConfig">putAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCaptchaConfig">putCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putChallengeConfig">putChallengeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCustomResponseBody">putCustomResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putDefaultAction">putDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putVisibilityConfig">putVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetAssociationConfig">resetAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetCaptchaConfig">resetCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetChallengeConfig">resetChallengeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetCustomResponseBody">resetCustomResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetRuleJson">resetRuleJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTokenDomains">resetTokenDomains</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssociationConfig` <a name="putAssociationConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putAssociationConfig"></a>

```typescript
public putAssociationConfig(value: Wafv2WebAclAssociationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putAssociationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a>

---

##### `putCaptchaConfig` <a name="putCaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCaptchaConfig"></a>

```typescript
public putCaptchaConfig(value: Wafv2WebAclCaptchaConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCaptchaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a>

---

##### `putChallengeConfig` <a name="putChallengeConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putChallengeConfig"></a>

```typescript
public putChallengeConfig(value: Wafv2WebAclChallengeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putChallengeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a>

---

##### `putCustomResponseBody` <a name="putCustomResponseBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCustomResponseBody"></a>

```typescript
public putCustomResponseBody(value: IResolvable | Wafv2WebAclCustomResponseBody[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putCustomResponseBody.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>[]

---

##### `putDefaultAction` <a name="putDefaultAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putDefaultAction"></a>

```typescript
public putDefaultAction(value: Wafv2WebAclDefaultAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putDefaultAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putRule"></a>

```typescript
public putRule(value: IResolvable | Wafv2WebAclRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>[]

---

##### `putVisibilityConfig` <a name="putVisibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putVisibilityConfig"></a>

```typescript
public putVisibilityConfig(value: Wafv2WebAclVisibilityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.putVisibilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a>

---

##### `resetAssociationConfig` <a name="resetAssociationConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetAssociationConfig"></a>

```typescript
public resetAssociationConfig(): void
```

##### `resetCaptchaConfig` <a name="resetCaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetCaptchaConfig"></a>

```typescript
public resetCaptchaConfig(): void
```

##### `resetChallengeConfig` <a name="resetChallengeConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetChallengeConfig"></a>

```typescript
public resetChallengeConfig(): void
```

##### `resetCustomResponseBody` <a name="resetCustomResponseBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetCustomResponseBody"></a>

```typescript
public resetCustomResponseBody(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetRule"></a>

```typescript
public resetRule(): void
```

##### `resetRuleJson` <a name="resetRuleJson" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetRuleJson"></a>

```typescript
public resetRuleJson(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTokenDomains` <a name="resetTokenDomains" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.resetTokenDomains"></a>

```typescript
public resetTokenDomains(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Wafv2WebAcl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isConstruct"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

wafv2WebAcl.Wafv2WebAcl.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformElement"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

wafv2WebAcl.Wafv2WebAcl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformResource"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

wafv2WebAcl.Wafv2WebAcl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

wafv2WebAcl.Wafv2WebAcl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Wafv2WebAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Wafv2WebAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Wafv2WebAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Wafv2WebAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.applicationIntegrationUrl">applicationIntegrationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.associationConfig">associationConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference">Wafv2WebAclAssociationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.captchaConfig">captchaConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference">Wafv2WebAclCaptchaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.challengeConfig">challengeConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference">Wafv2WebAclChallengeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.customResponseBody">customResponseBody</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList">Wafv2WebAclCustomResponseBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.defaultAction">defaultAction</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference">Wafv2WebAclDefaultActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.lockToken">lockToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList">Wafv2WebAclRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.visibilityConfig">visibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference">Wafv2WebAclVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.associationConfigInput">associationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.captchaConfigInput">captchaConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.challengeConfigInput">challengeConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.customResponseBodyInput">customResponseBodyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.defaultActionInput">defaultActionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.ruleJsonInput">ruleJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tokenDomainsInput">tokenDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.visibilityConfigInput">visibilityConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.ruleJson">ruleJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tokenDomains">tokenDomains</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationIntegrationUrl`<sup>Required</sup> <a name="applicationIntegrationUrl" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.applicationIntegrationUrl"></a>

```typescript
public readonly applicationIntegrationUrl: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associationConfig`<sup>Required</sup> <a name="associationConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.associationConfig"></a>

```typescript
public readonly associationConfig: Wafv2WebAclAssociationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference">Wafv2WebAclAssociationConfigOutputReference</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `captchaConfig`<sup>Required</sup> <a name="captchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.captchaConfig"></a>

```typescript
public readonly captchaConfig: Wafv2WebAclCaptchaConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference">Wafv2WebAclCaptchaConfigOutputReference</a>

---

##### `challengeConfig`<sup>Required</sup> <a name="challengeConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.challengeConfig"></a>

```typescript
public readonly challengeConfig: Wafv2WebAclChallengeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference">Wafv2WebAclChallengeConfigOutputReference</a>

---

##### `customResponseBody`<sup>Required</sup> <a name="customResponseBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.customResponseBody"></a>

```typescript
public readonly customResponseBody: Wafv2WebAclCustomResponseBodyList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList">Wafv2WebAclCustomResponseBodyList</a>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.defaultAction"></a>

```typescript
public readonly defaultAction: Wafv2WebAclDefaultActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference">Wafv2WebAclDefaultActionOutputReference</a>

---

##### `lockToken`<sup>Required</sup> <a name="lockToken" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.lockToken"></a>

```typescript
public readonly lockToken: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.rule"></a>

```typescript
public readonly rule: Wafv2WebAclRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList">Wafv2WebAclRuleList</a>

---

##### `visibilityConfig`<sup>Required</sup> <a name="visibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.visibilityConfig"></a>

```typescript
public readonly visibilityConfig: Wafv2WebAclVisibilityConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference">Wafv2WebAclVisibilityConfigOutputReference</a>

---

##### `associationConfigInput`<sup>Optional</sup> <a name="associationConfigInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.associationConfigInput"></a>

```typescript
public readonly associationConfigInput: Wafv2WebAclAssociationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a>

---

##### `captchaConfigInput`<sup>Optional</sup> <a name="captchaConfigInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.captchaConfigInput"></a>

```typescript
public readonly captchaConfigInput: Wafv2WebAclCaptchaConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a>

---

##### `challengeConfigInput`<sup>Optional</sup> <a name="challengeConfigInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.challengeConfigInput"></a>

```typescript
public readonly challengeConfigInput: Wafv2WebAclChallengeConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a>

---

##### `customResponseBodyInput`<sup>Optional</sup> <a name="customResponseBodyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.customResponseBodyInput"></a>

```typescript
public readonly customResponseBodyInput: IResolvable | Wafv2WebAclCustomResponseBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>[]

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.defaultActionInput"></a>

```typescript
public readonly defaultActionInput: Wafv2WebAclDefaultAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | Wafv2WebAclRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>[]

---

##### `ruleJsonInput`<sup>Optional</sup> <a name="ruleJsonInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.ruleJsonInput"></a>

```typescript
public readonly ruleJsonInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tokenDomainsInput`<sup>Optional</sup> <a name="tokenDomainsInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tokenDomainsInput"></a>

```typescript
public readonly tokenDomainsInput: string[];
```

- *Type:* string[]

---

##### `visibilityConfigInput`<sup>Optional</sup> <a name="visibilityConfigInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.visibilityConfigInput"></a>

```typescript
public readonly visibilityConfigInput: Wafv2WebAclVisibilityConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ruleJson`<sup>Required</sup> <a name="ruleJson" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.ruleJson"></a>

```typescript
public readonly ruleJson: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tokenDomains`<sup>Required</sup> <a name="tokenDomains" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tokenDomains"></a>

```typescript
public readonly tokenDomains: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAcl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Wafv2WebAclAssociationConfig <a name="Wafv2WebAclAssociationConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclAssociationConfig: wafv2WebAcl.Wafv2WebAclAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig.property.requestBody">requestBody</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>[]</code> | request_body block. |

---

##### `requestBody`<sup>Optional</sup> <a name="requestBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig.property.requestBody"></a>

```typescript
public readonly requestBody: IResolvable | Wafv2WebAclAssociationConfigRequestBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>[]

request_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#request_body Wafv2WebAcl#request_body}

---

### Wafv2WebAclAssociationConfigRequestBody <a name="Wafv2WebAclAssociationConfigRequestBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclAssociationConfigRequestBody: wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.apiGateway">apiGateway</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway">Wafv2WebAclAssociationConfigRequestBodyApiGateway</a></code> | api_gateway block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.appRunnerService">appRunnerService</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService">Wafv2WebAclAssociationConfigRequestBodyAppRunnerService</a></code> | app_runner_service block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.cloudfront">cloudfront</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a></code> | cloudfront block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.cognitoUserPool">cognitoUserPool</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool</a></code> | cognito_user_pool block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.verifiedAccessInstance">verifiedAccessInstance</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance</a></code> | verified_access_instance block. |

---

##### `apiGateway`<sup>Optional</sup> <a name="apiGateway" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.apiGateway"></a>

```typescript
public readonly apiGateway: Wafv2WebAclAssociationConfigRequestBodyApiGateway;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway">Wafv2WebAclAssociationConfigRequestBodyApiGateway</a>

api_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#api_gateway Wafv2WebAcl#api_gateway}

---

##### `appRunnerService`<sup>Optional</sup> <a name="appRunnerService" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.appRunnerService"></a>

```typescript
public readonly appRunnerService: Wafv2WebAclAssociationConfigRequestBodyAppRunnerService;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService">Wafv2WebAclAssociationConfigRequestBodyAppRunnerService</a>

app_runner_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#app_runner_service Wafv2WebAcl#app_runner_service}

---

##### `cloudfront`<sup>Optional</sup> <a name="cloudfront" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.cloudfront"></a>

```typescript
public readonly cloudfront: Wafv2WebAclAssociationConfigRequestBodyCloudfront;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>

cloudfront block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#cloudfront Wafv2WebAcl#cloudfront}

---

##### `cognitoUserPool`<sup>Optional</sup> <a name="cognitoUserPool" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.cognitoUserPool"></a>

```typescript
public readonly cognitoUserPool: Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool</a>

cognito_user_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#cognito_user_pool Wafv2WebAcl#cognito_user_pool}

---

##### `verifiedAccessInstance`<sup>Optional</sup> <a name="verifiedAccessInstance" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody.property.verifiedAccessInstance"></a>

```typescript
public readonly verifiedAccessInstance: Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance</a>

verified_access_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#verified_access_instance Wafv2WebAcl#verified_access_instance}

---

### Wafv2WebAclAssociationConfigRequestBodyApiGateway <a name="Wafv2WebAclAssociationConfigRequestBodyApiGateway" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclAssociationConfigRequestBodyApiGateway: wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway.property.defaultSizeInspectionLimit">defaultSizeInspectionLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}. |

---

##### `defaultSizeInspectionLimit`<sup>Required</sup> <a name="defaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway.property.defaultSizeInspectionLimit"></a>

```typescript
public readonly defaultSizeInspectionLimit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}.

---

### Wafv2WebAclAssociationConfigRequestBodyAppRunnerService <a name="Wafv2WebAclAssociationConfigRequestBodyAppRunnerService" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclAssociationConfigRequestBodyAppRunnerService: wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService.property.defaultSizeInspectionLimit">defaultSizeInspectionLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}. |

---

##### `defaultSizeInspectionLimit`<sup>Required</sup> <a name="defaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService.property.defaultSizeInspectionLimit"></a>

```typescript
public readonly defaultSizeInspectionLimit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}.

---

### Wafv2WebAclAssociationConfigRequestBodyCloudfront <a name="Wafv2WebAclAssociationConfigRequestBodyCloudfront" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclAssociationConfigRequestBodyCloudfront: wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront.property.defaultSizeInspectionLimit">defaultSizeInspectionLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}. |

---

##### `defaultSizeInspectionLimit`<sup>Required</sup> <a name="defaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront.property.defaultSizeInspectionLimit"></a>

```typescript
public readonly defaultSizeInspectionLimit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}.

---

### Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool <a name="Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclAssociationConfigRequestBodyCognitoUserPool: wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool.property.defaultSizeInspectionLimit">defaultSizeInspectionLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}. |

---

##### `defaultSizeInspectionLimit`<sup>Required</sup> <a name="defaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool.property.defaultSizeInspectionLimit"></a>

```typescript
public readonly defaultSizeInspectionLimit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}.

---

### Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance <a name="Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance: wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance.property.defaultSizeInspectionLimit">defaultSizeInspectionLimit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}. |

---

##### `defaultSizeInspectionLimit`<sup>Required</sup> <a name="defaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance.property.defaultSizeInspectionLimit"></a>

```typescript
public readonly defaultSizeInspectionLimit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}.

---

### Wafv2WebAclCaptchaConfig <a name="Wafv2WebAclCaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclCaptchaConfig: wafv2WebAcl.Wafv2WebAclCaptchaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig.property.immunityTimeProperty">immunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a></code> | immunity_time_property block. |

---

##### `immunityTimeProperty`<sup>Optional</sup> <a name="immunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig.property.immunityTimeProperty"></a>

```typescript
public readonly immunityTimeProperty: Wafv2WebAclCaptchaConfigImmunityTimeProperty;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}

---

### Wafv2WebAclCaptchaConfigImmunityTimeProperty <a name="Wafv2WebAclCaptchaConfigImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclCaptchaConfigImmunityTimeProperty: wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty.property.immunityTime">immunityTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}. |

---

##### `immunityTime`<sup>Optional</sup> <a name="immunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty.property.immunityTime"></a>

```typescript
public readonly immunityTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}.

---

### Wafv2WebAclChallengeConfig <a name="Wafv2WebAclChallengeConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclChallengeConfig: wafv2WebAcl.Wafv2WebAclChallengeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig.property.immunityTimeProperty">immunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a></code> | immunity_time_property block. |

---

##### `immunityTimeProperty`<sup>Optional</sup> <a name="immunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig.property.immunityTimeProperty"></a>

```typescript
public readonly immunityTimeProperty: Wafv2WebAclChallengeConfigImmunityTimeProperty;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}

---

### Wafv2WebAclChallengeConfigImmunityTimeProperty <a name="Wafv2WebAclChallengeConfigImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclChallengeConfigImmunityTimeProperty: wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty.property.immunityTime">immunityTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}. |

---

##### `immunityTime`<sup>Optional</sup> <a name="immunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty.property.immunityTime"></a>

```typescript
public readonly immunityTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}.

---

### Wafv2WebAclConfig <a name="Wafv2WebAclConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclConfig: wafv2WebAcl.Wafv2WebAclConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.defaultAction">defaultAction</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a></code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#scope Wafv2WebAcl#scope}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.visibilityConfig">visibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.associationConfig">associationConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a></code> | association_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.captchaConfig">captchaConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a></code> | captcha_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.challengeConfig">challengeConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a></code> | challenge_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.customResponseBody">customResponseBody</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>[]</code> | custom_response_body block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#description Wafv2WebAcl#description}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#id Wafv2WebAcl#id}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.ruleJson">ruleJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#rule_json Wafv2WebAcl#rule_json}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#tags Wafv2WebAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#tags_all Wafv2WebAcl#tags_all}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tokenDomains">tokenDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#token_domains Wafv2WebAcl#token_domains}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.defaultAction"></a>

```typescript
public readonly defaultAction: Wafv2WebAclDefaultAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a>

default_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_action Wafv2WebAcl#default_action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#scope Wafv2WebAcl#scope}.

---

##### `visibilityConfig`<sup>Required</sup> <a name="visibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.visibilityConfig"></a>

```typescript
public readonly visibilityConfig: Wafv2WebAclVisibilityConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#visibility_config Wafv2WebAcl#visibility_config}

---

##### `associationConfig`<sup>Optional</sup> <a name="associationConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.associationConfig"></a>

```typescript
public readonly associationConfig: Wafv2WebAclAssociationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a>

association_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#association_config Wafv2WebAcl#association_config}

---

##### `captchaConfig`<sup>Optional</sup> <a name="captchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.captchaConfig"></a>

```typescript
public readonly captchaConfig: Wafv2WebAclCaptchaConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a>

captcha_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#captcha_config Wafv2WebAcl#captcha_config}

---

##### `challengeConfig`<sup>Optional</sup> <a name="challengeConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.challengeConfig"></a>

```typescript
public readonly challengeConfig: Wafv2WebAclChallengeConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a>

challenge_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#challenge_config Wafv2WebAcl#challenge_config}

---

##### `customResponseBody`<sup>Optional</sup> <a name="customResponseBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.customResponseBody"></a>

```typescript
public readonly customResponseBody: IResolvable | Wafv2WebAclCustomResponseBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>[]

custom_response_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_response_body Wafv2WebAcl#custom_response_body}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#description Wafv2WebAcl#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#id Wafv2WebAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | Wafv2WebAclRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#rule Wafv2WebAcl#rule}

---

##### `ruleJson`<sup>Optional</sup> <a name="ruleJson" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.ruleJson"></a>

```typescript
public readonly ruleJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#rule_json Wafv2WebAcl#rule_json}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#tags Wafv2WebAcl#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#tags_all Wafv2WebAcl#tags_all}.

---

##### `tokenDomains`<sup>Optional</sup> <a name="tokenDomains" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclConfig.property.tokenDomains"></a>

```typescript
public readonly tokenDomains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#token_domains Wafv2WebAcl#token_domains}.

---

### Wafv2WebAclCustomResponseBody <a name="Wafv2WebAclCustomResponseBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclCustomResponseBody: wafv2WebAcl.Wafv2WebAclCustomResponseBody = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#content Wafv2WebAcl#content}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#content_type Wafv2WebAcl#content_type}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#key Wafv2WebAcl#key}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#content Wafv2WebAcl#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#content_type Wafv2WebAcl#content_type}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#key Wafv2WebAcl#key}.

---

### Wafv2WebAclDefaultAction <a name="Wafv2WebAclDefaultAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclDefaultAction: wafv2WebAcl.Wafv2WebAclDefaultAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction.property.block">block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a></code> | block block. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction.property.allow"></a>

```typescript
public readonly allow: Wafv2WebAclDefaultActionAllow;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#allow Wafv2WebAcl#allow}

---

##### `block`<sup>Optional</sup> <a name="block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction.property.block"></a>

```typescript
public readonly block: Wafv2WebAclDefaultActionBlock;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a>

block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#block Wafv2WebAcl#block}

---

### Wafv2WebAclDefaultActionAllow <a name="Wafv2WebAclDefaultActionAllow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclDefaultActionAllow: wafv2WebAcl.Wafv2WebAclDefaultActionAllow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `customRequestHandling`<sup>Optional</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2WebAclDefaultActionAllowCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

### Wafv2WebAclDefaultActionAllowCustomRequestHandling <a name="Wafv2WebAclDefaultActionAllowCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclDefaultActionAllowCustomRequestHandling: wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling.property.insertHeader">insertHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>[]</code> | insert_header block. |

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling.property.insertHeader"></a>

```typescript
public readonly insertHeader: IResolvable | Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>[]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

### Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader <a name="Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader: wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclDefaultActionBlock <a name="Wafv2WebAclDefaultActionBlock" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclDefaultActionBlock: wafv2WebAcl.Wafv2WebAclDefaultActionBlock = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock.property.customResponse">customResponse</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a></code> | custom_response block. |

---

##### `customResponse`<sup>Optional</sup> <a name="customResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock.property.customResponse"></a>

```typescript
public readonly customResponse: Wafv2WebAclDefaultActionBlockCustomResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a>

custom_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_response Wafv2WebAcl#custom_response}

---

### Wafv2WebAclDefaultActionBlockCustomResponse <a name="Wafv2WebAclDefaultActionBlockCustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclDefaultActionBlockCustomResponse: wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.responseCode">responseCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.customResponseBodyKey">customResponseBodyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.responseHeader">responseHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>[]</code> | response_header block. |

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}.

---

##### `customResponseBodyKey`<sup>Optional</sup> <a name="customResponseBodyKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.customResponseBodyKey"></a>

```typescript
public readonly customResponseBodyKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}.

---

##### `responseHeader`<sup>Optional</sup> <a name="responseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse.property.responseHeader"></a>

```typescript
public readonly responseHeader: IResolvable | Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>[]

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#response_header Wafv2WebAcl#response_header}

---

### Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader <a name="Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclDefaultActionBlockCustomResponseResponseHeader: wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRule <a name="Wafv2WebAclRule" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRule: wafv2WebAcl.Wafv2WebAclRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.visibilityConfig">visibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.captchaConfig">captchaConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a></code> | captcha_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.overrideAction">overrideAction</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a></code> | override_action block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.ruleLabel">ruleLabel</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>[]</code> | rule_label block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.statement">statement</a></code> | <code>any</code> | statement block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}.

---

##### `visibilityConfig`<sup>Required</sup> <a name="visibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.visibilityConfig"></a>

```typescript
public readonly visibilityConfig: Wafv2WebAclRuleVisibilityConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#visibility_config Wafv2WebAcl#visibility_config}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.action"></a>

```typescript
public readonly action: Wafv2WebAclRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#action Wafv2WebAcl#action}

---

##### `captchaConfig`<sup>Optional</sup> <a name="captchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.captchaConfig"></a>

```typescript
public readonly captchaConfig: Wafv2WebAclRuleCaptchaConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a>

captcha_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#captcha_config Wafv2WebAcl#captcha_config}

---

##### `overrideAction`<sup>Optional</sup> <a name="overrideAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.overrideAction"></a>

```typescript
public readonly overrideAction: Wafv2WebAclRuleOverrideAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a>

override_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#override_action Wafv2WebAcl#override_action}

---

##### `ruleLabel`<sup>Optional</sup> <a name="ruleLabel" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.ruleLabel"></a>

```typescript
public readonly ruleLabel: IResolvable | Wafv2WebAclRuleRuleLabel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>[]

rule_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#rule_label Wafv2WebAcl#rule_label}

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule.property.statement"></a>

```typescript
public readonly statement: any;
```

- *Type:* any

statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#statement Wafv2WebAcl#statement}

---

### Wafv2WebAclRuleAction <a name="Wafv2WebAclRuleAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleAction: wafv2WebAcl.Wafv2WebAclRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.block">block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a></code> | block block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.captcha">captcha</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a></code> | captcha block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.challenge">challenge</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a></code> | challenge block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.count">count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a></code> | count block. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.allow"></a>

```typescript
public readonly allow: Wafv2WebAclRuleActionAllow;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#allow Wafv2WebAcl#allow}

---

##### `block`<sup>Optional</sup> <a name="block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.block"></a>

```typescript
public readonly block: Wafv2WebAclRuleActionBlock;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a>

block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#block Wafv2WebAcl#block}

---

##### `captcha`<sup>Optional</sup> <a name="captcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.captcha"></a>

```typescript
public readonly captcha: Wafv2WebAclRuleActionCaptcha;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a>

captcha block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#captcha Wafv2WebAcl#captcha}

---

##### `challenge`<sup>Optional</sup> <a name="challenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.challenge"></a>

```typescript
public readonly challenge: Wafv2WebAclRuleActionChallenge;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a>

challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#challenge Wafv2WebAcl#challenge}

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction.property.count"></a>

```typescript
public readonly count: Wafv2WebAclRuleActionCount;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a>

count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#count Wafv2WebAcl#count}

---

### Wafv2WebAclRuleActionAllow <a name="Wafv2WebAclRuleActionAllow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleActionAllow: wafv2WebAcl.Wafv2WebAclRuleActionAllow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `customRequestHandling`<sup>Optional</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2WebAclRuleActionAllowCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

### Wafv2WebAclRuleActionAllowCustomRequestHandling <a name="Wafv2WebAclRuleActionAllowCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleActionAllowCustomRequestHandling: wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling.property.insertHeader">insertHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>[]</code> | insert_header block. |

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling.property.insertHeader"></a>

```typescript
public readonly insertHeader: IResolvable | Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>[]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

### Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader <a name="Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader: wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRuleActionBlock <a name="Wafv2WebAclRuleActionBlock" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleActionBlock: wafv2WebAcl.Wafv2WebAclRuleActionBlock = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock.property.customResponse">customResponse</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a></code> | custom_response block. |

---

##### `customResponse`<sup>Optional</sup> <a name="customResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock.property.customResponse"></a>

```typescript
public readonly customResponse: Wafv2WebAclRuleActionBlockCustomResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a>

custom_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_response Wafv2WebAcl#custom_response}

---

### Wafv2WebAclRuleActionBlockCustomResponse <a name="Wafv2WebAclRuleActionBlockCustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleActionBlockCustomResponse: wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.responseCode">responseCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.customResponseBodyKey">customResponseBodyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.responseHeader">responseHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>[]</code> | response_header block. |

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}.

---

##### `customResponseBodyKey`<sup>Optional</sup> <a name="customResponseBodyKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.customResponseBodyKey"></a>

```typescript
public readonly customResponseBodyKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}.

---

##### `responseHeader`<sup>Optional</sup> <a name="responseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse.property.responseHeader"></a>

```typescript
public readonly responseHeader: IResolvable | Wafv2WebAclRuleActionBlockCustomResponseResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>[]

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#response_header Wafv2WebAcl#response_header}

---

### Wafv2WebAclRuleActionBlockCustomResponseResponseHeader <a name="Wafv2WebAclRuleActionBlockCustomResponseResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleActionBlockCustomResponseResponseHeader: wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRuleActionCaptcha <a name="Wafv2WebAclRuleActionCaptcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleActionCaptcha: wafv2WebAcl.Wafv2WebAclRuleActionCaptcha = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `customRequestHandling`<sup>Optional</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2WebAclRuleActionCaptchaCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

### Wafv2WebAclRuleActionCaptchaCustomRequestHandling <a name="Wafv2WebAclRuleActionCaptchaCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleActionCaptchaCustomRequestHandling: wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling.property.insertHeader">insertHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>[]</code> | insert_header block. |

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling.property.insertHeader"></a>

```typescript
public readonly insertHeader: IResolvable | Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>[]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

### Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader <a name="Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader: wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRuleActionChallenge <a name="Wafv2WebAclRuleActionChallenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleActionChallenge: wafv2WebAcl.Wafv2WebAclRuleActionChallenge = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `customRequestHandling`<sup>Optional</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2WebAclRuleActionChallengeCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

### Wafv2WebAclRuleActionChallengeCustomRequestHandling <a name="Wafv2WebAclRuleActionChallengeCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleActionChallengeCustomRequestHandling: wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling.property.insertHeader">insertHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>[]</code> | insert_header block. |

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling.property.insertHeader"></a>

```typescript
public readonly insertHeader: IResolvable | Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>[]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

### Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader <a name="Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader: wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRuleActionCount <a name="Wafv2WebAclRuleActionCount" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleActionCount: wafv2WebAcl.Wafv2WebAclRuleActionCount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `customRequestHandling`<sup>Optional</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2WebAclRuleActionCountCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}

---

### Wafv2WebAclRuleActionCountCustomRequestHandling <a name="Wafv2WebAclRuleActionCountCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleActionCountCustomRequestHandling: wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling.property.insertHeader">insertHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>[]</code> | insert_header block. |

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling.property.insertHeader"></a>

```typescript
public readonly insertHeader: IResolvable | Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>[]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}

---

### Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader <a name="Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader: wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}.

---

### Wafv2WebAclRuleCaptchaConfig <a name="Wafv2WebAclRuleCaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleCaptchaConfig: wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig.property.immunityTimeProperty">immunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a></code> | immunity_time_property block. |

---

##### `immunityTimeProperty`<sup>Optional</sup> <a name="immunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig.property.immunityTimeProperty"></a>

```typescript
public readonly immunityTimeProperty: Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}

---

### Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty <a name="Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleCaptchaConfigImmunityTimeProperty: wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty.property.immunityTime">immunityTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}. |

---

##### `immunityTime`<sup>Optional</sup> <a name="immunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty.property.immunityTime"></a>

```typescript
public readonly immunityTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}.

---

### Wafv2WebAclRuleOverrideAction <a name="Wafv2WebAclRuleOverrideAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleOverrideAction: wafv2WebAcl.Wafv2WebAclRuleOverrideAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction.property.count">count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a></code> | count block. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction.property.none">none</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a></code> | none block. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction.property.count"></a>

```typescript
public readonly count: Wafv2WebAclRuleOverrideActionCount;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a>

count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#count Wafv2WebAcl#count}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction.property.none"></a>

```typescript
public readonly none: Wafv2WebAclRuleOverrideActionNone;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a>

none block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#none Wafv2WebAcl#none}

---

### Wafv2WebAclRuleOverrideActionCount <a name="Wafv2WebAclRuleOverrideActionCount" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleOverrideActionCount: wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount = { ... }
```


### Wafv2WebAclRuleOverrideActionNone <a name="Wafv2WebAclRuleOverrideActionNone" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleOverrideActionNone: wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone = { ... }
```


### Wafv2WebAclRuleRuleLabel <a name="Wafv2WebAclRuleRuleLabel" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleRuleLabel: wafv2WebAcl.Wafv2WebAclRuleRuleLabel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}.

---

### Wafv2WebAclRuleVisibilityConfig <a name="Wafv2WebAclRuleVisibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclRuleVisibilityConfig: wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.cloudwatchMetricsEnabled">cloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.sampledRequestsEnabled">sampledRequestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}. |

---

##### `cloudwatchMetricsEnabled`<sup>Required</sup> <a name="cloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.cloudwatchMetricsEnabled"></a>

```typescript
public readonly cloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}.

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}.

---

##### `sampledRequestsEnabled`<sup>Required</sup> <a name="sampledRequestsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig.property.sampledRequestsEnabled"></a>

```typescript
public readonly sampledRequestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}.

---

### Wafv2WebAclVisibilityConfig <a name="Wafv2WebAclVisibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

const wafv2WebAclVisibilityConfig: wafv2WebAcl.Wafv2WebAclVisibilityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.cloudwatchMetricsEnabled">cloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.sampledRequestsEnabled">sampledRequestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}. |

---

##### `cloudwatchMetricsEnabled`<sup>Required</sup> <a name="cloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.cloudwatchMetricsEnabled"></a>

```typescript
public readonly cloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}.

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}.

---

##### `sampledRequestsEnabled`<sup>Required</sup> <a name="sampledRequestsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig.property.sampledRequestsEnabled"></a>

```typescript
public readonly sampledRequestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2WebAclAssociationConfigOutputReference <a name="Wafv2WebAclAssociationConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.putRequestBody">putRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.resetRequestBody">resetRequestBody</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequestBody` <a name="putRequestBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.putRequestBody"></a>

```typescript
public putRequestBody(value: IResolvable | Wafv2WebAclAssociationConfigRequestBody[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.putRequestBody.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>[]

---

##### `resetRequestBody` <a name="resetRequestBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.resetRequestBody"></a>

```typescript
public resetRequestBody(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.requestBody">requestBody</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList">Wafv2WebAclAssociationConfigRequestBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.requestBodyInput">requestBodyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestBody`<sup>Required</sup> <a name="requestBody" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.requestBody"></a>

```typescript
public readonly requestBody: Wafv2WebAclAssociationConfigRequestBodyList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList">Wafv2WebAclAssociationConfigRequestBodyList</a>

---

##### `requestBodyInput`<sup>Optional</sup> <a name="requestBodyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.requestBodyInput"></a>

```typescript
public readonly requestBodyInput: IResolvable | Wafv2WebAclAssociationConfigRequestBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclAssociationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfig">Wafv2WebAclAssociationConfig</a>

---


### Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference <a name="Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.defaultSizeInspectionLimitInput">defaultSizeInspectionLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.defaultSizeInspectionLimit">defaultSizeInspectionLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway">Wafv2WebAclAssociationConfigRequestBodyApiGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultSizeInspectionLimitInput`<sup>Optional</sup> <a name="defaultSizeInspectionLimitInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.defaultSizeInspectionLimitInput"></a>

```typescript
public readonly defaultSizeInspectionLimitInput: string;
```

- *Type:* string

---

##### `defaultSizeInspectionLimit`<sup>Required</sup> <a name="defaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.defaultSizeInspectionLimit"></a>

```typescript
public readonly defaultSizeInspectionLimit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclAssociationConfigRequestBodyApiGateway;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway">Wafv2WebAclAssociationConfigRequestBodyApiGateway</a>

---


### Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference <a name="Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.defaultSizeInspectionLimitInput">defaultSizeInspectionLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.defaultSizeInspectionLimit">defaultSizeInspectionLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService">Wafv2WebAclAssociationConfigRequestBodyAppRunnerService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultSizeInspectionLimitInput`<sup>Optional</sup> <a name="defaultSizeInspectionLimitInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.defaultSizeInspectionLimitInput"></a>

```typescript
public readonly defaultSizeInspectionLimitInput: string;
```

- *Type:* string

---

##### `defaultSizeInspectionLimit`<sup>Required</sup> <a name="defaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.defaultSizeInspectionLimit"></a>

```typescript
public readonly defaultSizeInspectionLimit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclAssociationConfigRequestBodyAppRunnerService;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService">Wafv2WebAclAssociationConfigRequestBodyAppRunnerService</a>

---


### Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference <a name="Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.defaultSizeInspectionLimitInput">defaultSizeInspectionLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.defaultSizeInspectionLimit">defaultSizeInspectionLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultSizeInspectionLimitInput`<sup>Optional</sup> <a name="defaultSizeInspectionLimitInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.defaultSizeInspectionLimitInput"></a>

```typescript
public readonly defaultSizeInspectionLimitInput: string;
```

- *Type:* string

---

##### `defaultSizeInspectionLimit`<sup>Required</sup> <a name="defaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.defaultSizeInspectionLimit"></a>

```typescript
public readonly defaultSizeInspectionLimit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclAssociationConfigRequestBodyCloudfront;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>

---


### Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference <a name="Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.defaultSizeInspectionLimitInput">defaultSizeInspectionLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.defaultSizeInspectionLimit">defaultSizeInspectionLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultSizeInspectionLimitInput`<sup>Optional</sup> <a name="defaultSizeInspectionLimitInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.defaultSizeInspectionLimitInput"></a>

```typescript
public readonly defaultSizeInspectionLimitInput: string;
```

- *Type:* string

---

##### `defaultSizeInspectionLimit`<sup>Required</sup> <a name="defaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.defaultSizeInspectionLimit"></a>

```typescript
public readonly defaultSizeInspectionLimit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool</a>

---


### Wafv2WebAclAssociationConfigRequestBodyList <a name="Wafv2WebAclAssociationConfigRequestBodyList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.get"></a>

```typescript
public get(index: number): Wafv2WebAclAssociationConfigRequestBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclAssociationConfigRequestBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>[]

---


### Wafv2WebAclAssociationConfigRequestBodyOutputReference <a name="Wafv2WebAclAssociationConfigRequestBodyOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putApiGateway">putApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putAppRunnerService">putAppRunnerService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putCloudfront">putCloudfront</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putCognitoUserPool">putCognitoUserPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putVerifiedAccessInstance">putVerifiedAccessInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetApiGateway">resetApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetAppRunnerService">resetAppRunnerService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetCloudfront">resetCloudfront</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetCognitoUserPool">resetCognitoUserPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetVerifiedAccessInstance">resetVerifiedAccessInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiGateway` <a name="putApiGateway" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putApiGateway"></a>

```typescript
public putApiGateway(value: Wafv2WebAclAssociationConfigRequestBodyApiGateway): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putApiGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway">Wafv2WebAclAssociationConfigRequestBodyApiGateway</a>

---

##### `putAppRunnerService` <a name="putAppRunnerService" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putAppRunnerService"></a>

```typescript
public putAppRunnerService(value: Wafv2WebAclAssociationConfigRequestBodyAppRunnerService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putAppRunnerService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService">Wafv2WebAclAssociationConfigRequestBodyAppRunnerService</a>

---

##### `putCloudfront` <a name="putCloudfront" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putCloudfront"></a>

```typescript
public putCloudfront(value: Wafv2WebAclAssociationConfigRequestBodyCloudfront): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putCloudfront.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>

---

##### `putCognitoUserPool` <a name="putCognitoUserPool" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putCognitoUserPool"></a>

```typescript
public putCognitoUserPool(value: Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putCognitoUserPool.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool</a>

---

##### `putVerifiedAccessInstance` <a name="putVerifiedAccessInstance" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putVerifiedAccessInstance"></a>

```typescript
public putVerifiedAccessInstance(value: Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.putVerifiedAccessInstance.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance</a>

---

##### `resetApiGateway` <a name="resetApiGateway" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetApiGateway"></a>

```typescript
public resetApiGateway(): void
```

##### `resetAppRunnerService` <a name="resetAppRunnerService" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetAppRunnerService"></a>

```typescript
public resetAppRunnerService(): void
```

##### `resetCloudfront` <a name="resetCloudfront" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetCloudfront"></a>

```typescript
public resetCloudfront(): void
```

##### `resetCognitoUserPool` <a name="resetCognitoUserPool" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetCognitoUserPool"></a>

```typescript
public resetCognitoUserPool(): void
```

##### `resetVerifiedAccessInstance` <a name="resetVerifiedAccessInstance" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.resetVerifiedAccessInstance"></a>

```typescript
public resetVerifiedAccessInstance(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.apiGateway">apiGateway</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference">Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.appRunnerService">appRunnerService</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference">Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cloudfront">cloudfront</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference">Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cognitoUserPool">cognitoUserPool</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.verifiedAccessInstance">verifiedAccessInstance</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.apiGatewayInput">apiGatewayInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway">Wafv2WebAclAssociationConfigRequestBodyApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.appRunnerServiceInput">appRunnerServiceInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService">Wafv2WebAclAssociationConfigRequestBodyAppRunnerService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cloudfrontInput">cloudfrontInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cognitoUserPoolInput">cognitoUserPoolInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.verifiedAccessInstanceInput">verifiedAccessInstanceInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiGateway`<sup>Required</sup> <a name="apiGateway" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.apiGateway"></a>

```typescript
public readonly apiGateway: Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference">Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference</a>

---

##### `appRunnerService`<sup>Required</sup> <a name="appRunnerService" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.appRunnerService"></a>

```typescript
public readonly appRunnerService: Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference">Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference</a>

---

##### `cloudfront`<sup>Required</sup> <a name="cloudfront" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cloudfront"></a>

```typescript
public readonly cloudfront: Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference">Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference</a>

---

##### `cognitoUserPool`<sup>Required</sup> <a name="cognitoUserPool" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cognitoUserPool"></a>

```typescript
public readonly cognitoUserPool: Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference</a>

---

##### `verifiedAccessInstance`<sup>Required</sup> <a name="verifiedAccessInstance" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.verifiedAccessInstance"></a>

```typescript
public readonly verifiedAccessInstance: Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference</a>

---

##### `apiGatewayInput`<sup>Optional</sup> <a name="apiGatewayInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.apiGatewayInput"></a>

```typescript
public readonly apiGatewayInput: Wafv2WebAclAssociationConfigRequestBodyApiGateway;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyApiGateway">Wafv2WebAclAssociationConfigRequestBodyApiGateway</a>

---

##### `appRunnerServiceInput`<sup>Optional</sup> <a name="appRunnerServiceInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.appRunnerServiceInput"></a>

```typescript
public readonly appRunnerServiceInput: Wafv2WebAclAssociationConfigRequestBodyAppRunnerService;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyAppRunnerService">Wafv2WebAclAssociationConfigRequestBodyAppRunnerService</a>

---

##### `cloudfrontInput`<sup>Optional</sup> <a name="cloudfrontInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cloudfrontInput"></a>

```typescript
public readonly cloudfrontInput: Wafv2WebAclAssociationConfigRequestBodyCloudfront;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCloudfront">Wafv2WebAclAssociationConfigRequestBodyCloudfront</a>

---

##### `cognitoUserPoolInput`<sup>Optional</sup> <a name="cognitoUserPoolInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.cognitoUserPoolInput"></a>

```typescript
public readonly cognitoUserPoolInput: Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool">Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool</a>

---

##### `verifiedAccessInstanceInput`<sup>Optional</sup> <a name="verifiedAccessInstanceInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.verifiedAccessInstanceInput"></a>

```typescript
public readonly verifiedAccessInstanceInput: Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclAssociationConfigRequestBody;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBody">Wafv2WebAclAssociationConfigRequestBody</a>

---


### Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference <a name="Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.defaultSizeInspectionLimitInput">defaultSizeInspectionLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.defaultSizeInspectionLimit">defaultSizeInspectionLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultSizeInspectionLimitInput`<sup>Optional</sup> <a name="defaultSizeInspectionLimitInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.defaultSizeInspectionLimitInput"></a>

```typescript
public readonly defaultSizeInspectionLimitInput: string;
```

- *Type:* string

---

##### `defaultSizeInspectionLimit`<sup>Required</sup> <a name="defaultSizeInspectionLimit" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.defaultSizeInspectionLimit"></a>

```typescript
public readonly defaultSizeInspectionLimit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance">Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance</a>

---


### Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference <a name="Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime">resetImmunityTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImmunityTime` <a name="resetImmunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime"></a>

```typescript
public resetImmunityTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput">immunityTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime">immunityTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `immunityTimeInput`<sup>Optional</sup> <a name="immunityTimeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput"></a>

```typescript
public readonly immunityTimeInput: number;
```

- *Type:* number

---

##### `immunityTime`<sup>Required</sup> <a name="immunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime"></a>

```typescript
public readonly immunityTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclCaptchaConfigImmunityTimeProperty;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a>

---


### Wafv2WebAclCaptchaConfigOutputReference <a name="Wafv2WebAclCaptchaConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.putImmunityTimeProperty">putImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.resetImmunityTimeProperty">resetImmunityTimeProperty</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImmunityTimeProperty` <a name="putImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.putImmunityTimeProperty"></a>

```typescript
public putImmunityTimeProperty(value: Wafv2WebAclCaptchaConfigImmunityTimeProperty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.putImmunityTimeProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a>

---

##### `resetImmunityTimeProperty` <a name="resetImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.resetImmunityTimeProperty"></a>

```typescript
public resetImmunityTimeProperty(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.immunityTimeProperty">immunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference">Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.immunityTimePropertyInput">immunityTimePropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `immunityTimeProperty`<sup>Required</sup> <a name="immunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.immunityTimeProperty"></a>

```typescript
public readonly immunityTimeProperty: Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference">Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference</a>

---

##### `immunityTimePropertyInput`<sup>Optional</sup> <a name="immunityTimePropertyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.immunityTimePropertyInput"></a>

```typescript
public readonly immunityTimePropertyInput: Wafv2WebAclCaptchaConfigImmunityTimeProperty;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigImmunityTimeProperty">Wafv2WebAclCaptchaConfigImmunityTimeProperty</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclCaptchaConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCaptchaConfig">Wafv2WebAclCaptchaConfig</a>

---


### Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference <a name="Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.resetImmunityTime">resetImmunityTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImmunityTime` <a name="resetImmunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.resetImmunityTime"></a>

```typescript
public resetImmunityTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.immunityTimeInput">immunityTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.immunityTime">immunityTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `immunityTimeInput`<sup>Optional</sup> <a name="immunityTimeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.immunityTimeInput"></a>

```typescript
public readonly immunityTimeInput: number;
```

- *Type:* number

---

##### `immunityTime`<sup>Required</sup> <a name="immunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.immunityTime"></a>

```typescript
public readonly immunityTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclChallengeConfigImmunityTimeProperty;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a>

---


### Wafv2WebAclChallengeConfigOutputReference <a name="Wafv2WebAclChallengeConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.putImmunityTimeProperty">putImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.resetImmunityTimeProperty">resetImmunityTimeProperty</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImmunityTimeProperty` <a name="putImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.putImmunityTimeProperty"></a>

```typescript
public putImmunityTimeProperty(value: Wafv2WebAclChallengeConfigImmunityTimeProperty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.putImmunityTimeProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a>

---

##### `resetImmunityTimeProperty` <a name="resetImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.resetImmunityTimeProperty"></a>

```typescript
public resetImmunityTimeProperty(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.immunityTimeProperty">immunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference">Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.immunityTimePropertyInput">immunityTimePropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `immunityTimeProperty`<sup>Required</sup> <a name="immunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.immunityTimeProperty"></a>

```typescript
public readonly immunityTimeProperty: Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference">Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference</a>

---

##### `immunityTimePropertyInput`<sup>Optional</sup> <a name="immunityTimePropertyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.immunityTimePropertyInput"></a>

```typescript
public readonly immunityTimePropertyInput: Wafv2WebAclChallengeConfigImmunityTimeProperty;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigImmunityTimeProperty">Wafv2WebAclChallengeConfigImmunityTimeProperty</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclChallengeConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclChallengeConfig">Wafv2WebAclChallengeConfig</a>

---


### Wafv2WebAclCustomResponseBodyList <a name="Wafv2WebAclCustomResponseBodyList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclCustomResponseBodyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.get"></a>

```typescript
public get(index: number): Wafv2WebAclCustomResponseBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclCustomResponseBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>[]

---


### Wafv2WebAclCustomResponseBodyOutputReference <a name="Wafv2WebAclCustomResponseBodyOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBodyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclCustomResponseBody;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclCustomResponseBody">Wafv2WebAclCustomResponseBody</a>

---


### Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList <a name="Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.get"></a>

```typescript
public get(index: number): Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>[]

---


### Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>

---


### Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference <a name="Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.putInsertHeader">putInsertHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInsertHeader` <a name="putInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.putInsertHeader"></a>

```typescript
public putInsertHeader(value: IResolvable | Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.insertHeader">insertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput">insertHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.insertHeader"></a>

```typescript
public readonly insertHeader: Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList</a>

---

##### `insertHeaderInput`<sup>Optional</sup> <a name="insertHeaderInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```typescript
public readonly insertHeaderInput: IResolvable | Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclDefaultActionAllowCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a>

---


### Wafv2WebAclDefaultActionAllowOutputReference <a name="Wafv2WebAclDefaultActionAllowOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.putCustomRequestHandling">putCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.resetCustomRequestHandling">resetCustomRequestHandling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRequestHandling` <a name="putCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.putCustomRequestHandling"></a>

```typescript
public putCustomRequestHandling(value: Wafv2WebAclDefaultActionAllowCustomRequestHandling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a>

---

##### `resetCustomRequestHandling` <a name="resetCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.resetCustomRequestHandling"></a>

```typescript
public resetCustomRequestHandling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference">Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.customRequestHandlingInput">customRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRequestHandling`<sup>Required</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference">Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference</a>

---

##### `customRequestHandlingInput`<sup>Optional</sup> <a name="customRequestHandlingInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.customRequestHandlingInput"></a>

```typescript
public readonly customRequestHandlingInput: Wafv2WebAclDefaultActionAllowCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowCustomRequestHandling">Wafv2WebAclDefaultActionAllowCustomRequestHandling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclDefaultActionAllow;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a>

---


### Wafv2WebAclDefaultActionBlockCustomResponseOutputReference <a name="Wafv2WebAclDefaultActionBlockCustomResponseOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.putResponseHeader">putResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey">resetCustomResponseBodyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resetResponseHeader">resetResponseHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResponseHeader` <a name="putResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.putResponseHeader"></a>

```typescript
public putResponseHeader(value: IResolvable | Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.putResponseHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>[]

---

##### `resetCustomResponseBodyKey` <a name="resetCustomResponseBodyKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey"></a>

```typescript
public resetCustomResponseBodyKey(): void
```

##### `resetResponseHeader` <a name="resetResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.resetResponseHeader"></a>

```typescript
public resetResponseHeader(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseHeader">responseHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput">customResponseBodyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseCodeInput">responseCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseHeaderInput">responseHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.customResponseBodyKey">customResponseBodyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseCode">responseCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `responseHeader`<sup>Required</sup> <a name="responseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseHeader"></a>

```typescript
public readonly responseHeader: Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList</a>

---

##### `customResponseBodyKeyInput`<sup>Optional</sup> <a name="customResponseBodyKeyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput"></a>

```typescript
public readonly customResponseBodyKeyInput: string;
```

- *Type:* string

---

##### `responseCodeInput`<sup>Optional</sup> <a name="responseCodeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseCodeInput"></a>

```typescript
public readonly responseCodeInput: number;
```

- *Type:* number

---

##### `responseHeaderInput`<sup>Optional</sup> <a name="responseHeaderInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseHeaderInput"></a>

```typescript
public readonly responseHeaderInput: IResolvable | Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>[]

---

##### `customResponseBodyKey`<sup>Required</sup> <a name="customResponseBodyKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.customResponseBodyKey"></a>

```typescript
public readonly customResponseBodyKey: string;
```

- *Type:* string

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclDefaultActionBlockCustomResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a>

---


### Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList <a name="Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.get"></a>

```typescript
public get(index: number): Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>[]

---


### Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference <a name="Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader">Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader</a>

---


### Wafv2WebAclDefaultActionBlockOutputReference <a name="Wafv2WebAclDefaultActionBlockOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.putCustomResponse">putCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.resetCustomResponse">resetCustomResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomResponse` <a name="putCustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.putCustomResponse"></a>

```typescript
public putCustomResponse(value: Wafv2WebAclDefaultActionBlockCustomResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.putCustomResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a>

---

##### `resetCustomResponse` <a name="resetCustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.resetCustomResponse"></a>

```typescript
public resetCustomResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.customResponse">customResponse</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference">Wafv2WebAclDefaultActionBlockCustomResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.customResponseInput">customResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customResponse`<sup>Required</sup> <a name="customResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.customResponse"></a>

```typescript
public readonly customResponse: Wafv2WebAclDefaultActionBlockCustomResponseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponseOutputReference">Wafv2WebAclDefaultActionBlockCustomResponseOutputReference</a>

---

##### `customResponseInput`<sup>Optional</sup> <a name="customResponseInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.customResponseInput"></a>

```typescript
public readonly customResponseInput: Wafv2WebAclDefaultActionBlockCustomResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockCustomResponse">Wafv2WebAclDefaultActionBlockCustomResponse</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclDefaultActionBlock;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a>

---


### Wafv2WebAclDefaultActionOutputReference <a name="Wafv2WebAclDefaultActionOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putBlock">putBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resetBlock">resetBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllow` <a name="putAllow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putAllow"></a>

```typescript
public putAllow(value: Wafv2WebAclDefaultActionAllow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a>

---

##### `putBlock` <a name="putBlock" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putBlock"></a>

```typescript
public putBlock(value: Wafv2WebAclDefaultActionBlock): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.putBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resetAllow"></a>

```typescript
public resetAllow(): void
```

##### `resetBlock` <a name="resetBlock" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.resetBlock"></a>

```typescript
public resetBlock(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference">Wafv2WebAclDefaultActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.block">block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference">Wafv2WebAclDefaultActionBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.allowInput">allowInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.blockInput">blockInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.allow"></a>

```typescript
public readonly allow: Wafv2WebAclDefaultActionAllowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllowOutputReference">Wafv2WebAclDefaultActionAllowOutputReference</a>

---

##### `block`<sup>Required</sup> <a name="block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.block"></a>

```typescript
public readonly block: Wafv2WebAclDefaultActionBlockOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlockOutputReference">Wafv2WebAclDefaultActionBlockOutputReference</a>

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.allowInput"></a>

```typescript
public readonly allowInput: Wafv2WebAclDefaultActionAllow;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionAllow">Wafv2WebAclDefaultActionAllow</a>

---

##### `blockInput`<sup>Optional</sup> <a name="blockInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.blockInput"></a>

```typescript
public readonly blockInput: Wafv2WebAclDefaultActionBlock;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionBlock">Wafv2WebAclDefaultActionBlock</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclDefaultAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclDefaultAction">Wafv2WebAclDefaultAction</a>

---


### Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList <a name="Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.get"></a>

```typescript
public get(index: number): Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>[]

---


### Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>

---


### Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference <a name="Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader">putInsertHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInsertHeader` <a name="putInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader"></a>

```typescript
public putInsertHeader(value: IResolvable | Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeader">insertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput">insertHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeader"></a>

```typescript
public readonly insertHeader: Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList</a>

---

##### `insertHeaderInput`<sup>Optional</sup> <a name="insertHeaderInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```typescript
public readonly insertHeaderInput: IResolvable | Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleActionAllowCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a>

---


### Wafv2WebAclRuleActionAllowOutputReference <a name="Wafv2WebAclRuleActionAllowOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.putCustomRequestHandling">putCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.resetCustomRequestHandling">resetCustomRequestHandling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRequestHandling` <a name="putCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.putCustomRequestHandling"></a>

```typescript
public putCustomRequestHandling(value: Wafv2WebAclRuleActionAllowCustomRequestHandling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a>

---

##### `resetCustomRequestHandling` <a name="resetCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.resetCustomRequestHandling"></a>

```typescript
public resetCustomRequestHandling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.customRequestHandlingInput">customRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRequestHandling`<sup>Required</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference</a>

---

##### `customRequestHandlingInput`<sup>Optional</sup> <a name="customRequestHandlingInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.customRequestHandlingInput"></a>

```typescript
public readonly customRequestHandlingInput: Wafv2WebAclRuleActionAllowCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowCustomRequestHandling">Wafv2WebAclRuleActionAllowCustomRequestHandling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleActionAllow;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a>

---


### Wafv2WebAclRuleActionBlockCustomResponseOutputReference <a name="Wafv2WebAclRuleActionBlockCustomResponseOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.putResponseHeader">putResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey">resetCustomResponseBodyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resetResponseHeader">resetResponseHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResponseHeader` <a name="putResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.putResponseHeader"></a>

```typescript
public putResponseHeader(value: IResolvable | Wafv2WebAclRuleActionBlockCustomResponseResponseHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.putResponseHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>[]

---

##### `resetCustomResponseBodyKey` <a name="resetCustomResponseBodyKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey"></a>

```typescript
public resetCustomResponseBodyKey(): void
```

##### `resetResponseHeader` <a name="resetResponseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.resetResponseHeader"></a>

```typescript
public resetResponseHeader(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseHeader">responseHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList">Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput">customResponseBodyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseCodeInput">responseCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseHeaderInput">responseHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKey">customResponseBodyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseCode">responseCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `responseHeader`<sup>Required</sup> <a name="responseHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseHeader"></a>

```typescript
public readonly responseHeader: Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList">Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList</a>

---

##### `customResponseBodyKeyInput`<sup>Optional</sup> <a name="customResponseBodyKeyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput"></a>

```typescript
public readonly customResponseBodyKeyInput: string;
```

- *Type:* string

---

##### `responseCodeInput`<sup>Optional</sup> <a name="responseCodeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseCodeInput"></a>

```typescript
public readonly responseCodeInput: number;
```

- *Type:* number

---

##### `responseHeaderInput`<sup>Optional</sup> <a name="responseHeaderInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseHeaderInput"></a>

```typescript
public readonly responseHeaderInput: IResolvable | Wafv2WebAclRuleActionBlockCustomResponseResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>[]

---

##### `customResponseBodyKey`<sup>Required</sup> <a name="customResponseBodyKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKey"></a>

```typescript
public readonly customResponseBodyKey: string;
```

- *Type:* string

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleActionBlockCustomResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a>

---


### Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList <a name="Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.get"></a>

```typescript
public get(index: number): Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclRuleActionBlockCustomResponseResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>[]

---


### Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference <a name="Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclRuleActionBlockCustomResponseResponseHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseResponseHeader">Wafv2WebAclRuleActionBlockCustomResponseResponseHeader</a>

---


### Wafv2WebAclRuleActionBlockOutputReference <a name="Wafv2WebAclRuleActionBlockOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.putCustomResponse">putCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.resetCustomResponse">resetCustomResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomResponse` <a name="putCustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.putCustomResponse"></a>

```typescript
public putCustomResponse(value: Wafv2WebAclRuleActionBlockCustomResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.putCustomResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a>

---

##### `resetCustomResponse` <a name="resetCustomResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.resetCustomResponse"></a>

```typescript
public resetCustomResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.customResponse">customResponse</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference">Wafv2WebAclRuleActionBlockCustomResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.customResponseInput">customResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customResponse`<sup>Required</sup> <a name="customResponse" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.customResponse"></a>

```typescript
public readonly customResponse: Wafv2WebAclRuleActionBlockCustomResponseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponseOutputReference">Wafv2WebAclRuleActionBlockCustomResponseOutputReference</a>

---

##### `customResponseInput`<sup>Optional</sup> <a name="customResponseInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.customResponseInput"></a>

```typescript
public readonly customResponseInput: Wafv2WebAclRuleActionBlockCustomResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockCustomResponse">Wafv2WebAclRuleActionBlockCustomResponse</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleActionBlock;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a>

---


### Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList <a name="Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get"></a>

```typescript
public get(index: number): Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>[]

---


### Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>

---


### Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference <a name="Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader">putInsertHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInsertHeader` <a name="putInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader"></a>

```typescript
public putInsertHeader(value: IResolvable | Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader">insertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeaderInput">insertHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader"></a>

```typescript
public readonly insertHeader: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList</a>

---

##### `insertHeaderInput`<sup>Optional</sup> <a name="insertHeaderInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```typescript
public readonly insertHeaderInput: IResolvable | Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleActionCaptchaCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a>

---


### Wafv2WebAclRuleActionCaptchaOutputReference <a name="Wafv2WebAclRuleActionCaptchaOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.putCustomRequestHandling">putCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.resetCustomRequestHandling">resetCustomRequestHandling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRequestHandling` <a name="putCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.putCustomRequestHandling"></a>

```typescript
public putCustomRequestHandling(value: Wafv2WebAclRuleActionCaptchaCustomRequestHandling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a>

---

##### `resetCustomRequestHandling` <a name="resetCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.resetCustomRequestHandling"></a>

```typescript
public resetCustomRequestHandling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.customRequestHandlingInput">customRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRequestHandling`<sup>Required</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference</a>

---

##### `customRequestHandlingInput`<sup>Optional</sup> <a name="customRequestHandlingInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.customRequestHandlingInput"></a>

```typescript
public readonly customRequestHandlingInput: Wafv2WebAclRuleActionCaptchaCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaCustomRequestHandling">Wafv2WebAclRuleActionCaptchaCustomRequestHandling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleActionCaptcha;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a>

---


### Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList <a name="Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.get"></a>

```typescript
public get(index: number): Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>[]

---


### Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>

---


### Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference <a name="Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader">putInsertHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInsertHeader` <a name="putInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader"></a>

```typescript
public putInsertHeader(value: IResolvable | Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeader">insertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeaderInput">insertHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeader"></a>

```typescript
public readonly insertHeader: Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList</a>

---

##### `insertHeaderInput`<sup>Optional</sup> <a name="insertHeaderInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```typescript
public readonly insertHeaderInput: IResolvable | Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleActionChallengeCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a>

---


### Wafv2WebAclRuleActionChallengeOutputReference <a name="Wafv2WebAclRuleActionChallengeOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.putCustomRequestHandling">putCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.resetCustomRequestHandling">resetCustomRequestHandling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRequestHandling` <a name="putCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.putCustomRequestHandling"></a>

```typescript
public putCustomRequestHandling(value: Wafv2WebAclRuleActionChallengeCustomRequestHandling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a>

---

##### `resetCustomRequestHandling` <a name="resetCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.resetCustomRequestHandling"></a>

```typescript
public resetCustomRequestHandling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.customRequestHandlingInput">customRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRequestHandling`<sup>Required</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference</a>

---

##### `customRequestHandlingInput`<sup>Optional</sup> <a name="customRequestHandlingInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.customRequestHandlingInput"></a>

```typescript
public readonly customRequestHandlingInput: Wafv2WebAclRuleActionChallengeCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeCustomRequestHandling">Wafv2WebAclRuleActionChallengeCustomRequestHandling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleActionChallenge;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a>

---


### Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList <a name="Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.get"></a>

```typescript
public get(index: number): Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>[]

---


### Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>

---


### Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference <a name="Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader">putInsertHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInsertHeader` <a name="putInsertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader"></a>

```typescript
public putInsertHeader(value: IResolvable | Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.insertHeader">insertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.insertHeaderInput">insertHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.insertHeader"></a>

```typescript
public readonly insertHeader: Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList</a>

---

##### `insertHeaderInput`<sup>Optional</sup> <a name="insertHeaderInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```typescript
public readonly insertHeaderInput: IResolvable | Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader">Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleActionCountCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a>

---


### Wafv2WebAclRuleActionCountOutputReference <a name="Wafv2WebAclRuleActionCountOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.putCustomRequestHandling">putCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.resetCustomRequestHandling">resetCustomRequestHandling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRequestHandling` <a name="putCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.putCustomRequestHandling"></a>

```typescript
public putCustomRequestHandling(value: Wafv2WebAclRuleActionCountCustomRequestHandling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a>

---

##### `resetCustomRequestHandling` <a name="resetCustomRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.resetCustomRequestHandling"></a>

```typescript
public resetCustomRequestHandling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.customRequestHandlingInput">customRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRequestHandling`<sup>Required</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference">Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference</a>

---

##### `customRequestHandlingInput`<sup>Optional</sup> <a name="customRequestHandlingInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.customRequestHandlingInput"></a>

```typescript
public readonly customRequestHandlingInput: Wafv2WebAclRuleActionCountCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountCustomRequestHandling">Wafv2WebAclRuleActionCountCustomRequestHandling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleActionCount;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a>

---


### Wafv2WebAclRuleActionOutputReference <a name="Wafv2WebAclRuleActionOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putBlock">putBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCaptcha">putCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putChallenge">putChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCount">putCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetBlock">resetBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetCaptcha">resetCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetChallenge">resetChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetCount">resetCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllow` <a name="putAllow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putAllow"></a>

```typescript
public putAllow(value: Wafv2WebAclRuleActionAllow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a>

---

##### `putBlock` <a name="putBlock" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putBlock"></a>

```typescript
public putBlock(value: Wafv2WebAclRuleActionBlock): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a>

---

##### `putCaptcha` <a name="putCaptcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCaptcha"></a>

```typescript
public putCaptcha(value: Wafv2WebAclRuleActionCaptcha): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCaptcha.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a>

---

##### `putChallenge` <a name="putChallenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putChallenge"></a>

```typescript
public putChallenge(value: Wafv2WebAclRuleActionChallenge): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a>

---

##### `putCount` <a name="putCount" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCount"></a>

```typescript
public putCount(value: Wafv2WebAclRuleActionCount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.putCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetAllow"></a>

```typescript
public resetAllow(): void
```

##### `resetBlock` <a name="resetBlock" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetBlock"></a>

```typescript
public resetBlock(): void
```

##### `resetCaptcha` <a name="resetCaptcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetCaptcha"></a>

```typescript
public resetCaptcha(): void
```

##### `resetChallenge` <a name="resetChallenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetChallenge"></a>

```typescript
public resetChallenge(): void
```

##### `resetCount` <a name="resetCount" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference">Wafv2WebAclRuleActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.block">block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference">Wafv2WebAclRuleActionBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.captcha">captcha</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference">Wafv2WebAclRuleActionCaptchaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.challenge">challenge</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference">Wafv2WebAclRuleActionChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.count">count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference">Wafv2WebAclRuleActionCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.allowInput">allowInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.blockInput">blockInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.captchaInput">captchaInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.challengeInput">challengeInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.countInput">countInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.allow"></a>

```typescript
public readonly allow: Wafv2WebAclRuleActionAllowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllowOutputReference">Wafv2WebAclRuleActionAllowOutputReference</a>

---

##### `block`<sup>Required</sup> <a name="block" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.block"></a>

```typescript
public readonly block: Wafv2WebAclRuleActionBlockOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlockOutputReference">Wafv2WebAclRuleActionBlockOutputReference</a>

---

##### `captcha`<sup>Required</sup> <a name="captcha" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.captcha"></a>

```typescript
public readonly captcha: Wafv2WebAclRuleActionCaptchaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptchaOutputReference">Wafv2WebAclRuleActionCaptchaOutputReference</a>

---

##### `challenge`<sup>Required</sup> <a name="challenge" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.challenge"></a>

```typescript
public readonly challenge: Wafv2WebAclRuleActionChallengeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallengeOutputReference">Wafv2WebAclRuleActionChallengeOutputReference</a>

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.count"></a>

```typescript
public readonly count: Wafv2WebAclRuleActionCountOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCountOutputReference">Wafv2WebAclRuleActionCountOutputReference</a>

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.allowInput"></a>

```typescript
public readonly allowInput: Wafv2WebAclRuleActionAllow;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionAllow">Wafv2WebAclRuleActionAllow</a>

---

##### `blockInput`<sup>Optional</sup> <a name="blockInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.blockInput"></a>

```typescript
public readonly blockInput: Wafv2WebAclRuleActionBlock;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionBlock">Wafv2WebAclRuleActionBlock</a>

---

##### `captchaInput`<sup>Optional</sup> <a name="captchaInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.captchaInput"></a>

```typescript
public readonly captchaInput: Wafv2WebAclRuleActionCaptcha;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCaptcha">Wafv2WebAclRuleActionCaptcha</a>

---

##### `challengeInput`<sup>Optional</sup> <a name="challengeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.challengeInput"></a>

```typescript
public readonly challengeInput: Wafv2WebAclRuleActionChallenge;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionChallenge">Wafv2WebAclRuleActionChallenge</a>

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.countInput"></a>

```typescript
public readonly countInput: Wafv2WebAclRuleActionCount;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionCount">Wafv2WebAclRuleActionCount</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a>

---


### Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference <a name="Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime">resetImmunityTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImmunityTime` <a name="resetImmunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime"></a>

```typescript
public resetImmunityTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput">immunityTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime">immunityTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `immunityTimeInput`<sup>Optional</sup> <a name="immunityTimeInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput"></a>

```typescript
public readonly immunityTimeInput: number;
```

- *Type:* number

---

##### `immunityTime`<sup>Required</sup> <a name="immunityTime" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime"></a>

```typescript
public readonly immunityTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a>

---


### Wafv2WebAclRuleCaptchaConfigOutputReference <a name="Wafv2WebAclRuleCaptchaConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.putImmunityTimeProperty">putImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.resetImmunityTimeProperty">resetImmunityTimeProperty</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImmunityTimeProperty` <a name="putImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.putImmunityTimeProperty"></a>

```typescript
public putImmunityTimeProperty(value: Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.putImmunityTimeProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a>

---

##### `resetImmunityTimeProperty` <a name="resetImmunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.resetImmunityTimeProperty"></a>

```typescript
public resetImmunityTimeProperty(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.immunityTimeProperty">immunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference">Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.immunityTimePropertyInput">immunityTimePropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `immunityTimeProperty`<sup>Required</sup> <a name="immunityTimeProperty" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.immunityTimeProperty"></a>

```typescript
public readonly immunityTimeProperty: Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference">Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference</a>

---

##### `immunityTimePropertyInput`<sup>Optional</sup> <a name="immunityTimePropertyInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.immunityTimePropertyInput"></a>

```typescript
public readonly immunityTimePropertyInput: Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty">Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleCaptchaConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a>

---


### Wafv2WebAclRuleList <a name="Wafv2WebAclRuleList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.get"></a>

```typescript
public get(index: number): Wafv2WebAclRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>[]

---


### Wafv2WebAclRuleOutputReference <a name="Wafv2WebAclRuleOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putCaptchaConfig">putCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putOverrideAction">putOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putRuleLabel">putRuleLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putVisibilityConfig">putVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetCaptchaConfig">resetCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetOverrideAction">resetOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetRuleLabel">resetRuleLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetStatement">resetStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putAction"></a>

```typescript
public putAction(value: Wafv2WebAclRuleAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a>

---

##### `putCaptchaConfig` <a name="putCaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putCaptchaConfig"></a>

```typescript
public putCaptchaConfig(value: Wafv2WebAclRuleCaptchaConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putCaptchaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a>

---

##### `putOverrideAction` <a name="putOverrideAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putOverrideAction"></a>

```typescript
public putOverrideAction(value: Wafv2WebAclRuleOverrideAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putOverrideAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a>

---

##### `putRuleLabel` <a name="putRuleLabel" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putRuleLabel"></a>

```typescript
public putRuleLabel(value: IResolvable | Wafv2WebAclRuleRuleLabel[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putRuleLabel.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>[]

---

##### `putVisibilityConfig` <a name="putVisibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putVisibilityConfig"></a>

```typescript
public putVisibilityConfig(value: Wafv2WebAclRuleVisibilityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.putVisibilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetCaptchaConfig` <a name="resetCaptchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetCaptchaConfig"></a>

```typescript
public resetCaptchaConfig(): void
```

##### `resetOverrideAction` <a name="resetOverrideAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetOverrideAction"></a>

```typescript
public resetOverrideAction(): void
```

##### `resetRuleLabel` <a name="resetRuleLabel" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetRuleLabel"></a>

```typescript
public resetRuleLabel(): void
```

##### `resetStatement` <a name="resetStatement" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.resetStatement"></a>

```typescript
public resetStatement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference">Wafv2WebAclRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.captchaConfig">captchaConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference">Wafv2WebAclRuleCaptchaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.overrideAction">overrideAction</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference">Wafv2WebAclRuleOverrideActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.ruleLabel">ruleLabel</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList">Wafv2WebAclRuleRuleLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.statementInput">statementInput</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.visibilityConfig">visibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference">Wafv2WebAclRuleVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.captchaConfigInput">captchaConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.overrideActionInput">overrideActionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.ruleLabelInput">ruleLabelInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.visibilityConfigInput">visibilityConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.statement">statement</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.action"></a>

```typescript
public readonly action: Wafv2WebAclRuleActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleActionOutputReference">Wafv2WebAclRuleActionOutputReference</a>

---

##### `captchaConfig`<sup>Required</sup> <a name="captchaConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.captchaConfig"></a>

```typescript
public readonly captchaConfig: Wafv2WebAclRuleCaptchaConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfigOutputReference">Wafv2WebAclRuleCaptchaConfigOutputReference</a>

---

##### `overrideAction`<sup>Required</sup> <a name="overrideAction" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.overrideAction"></a>

```typescript
public readonly overrideAction: Wafv2WebAclRuleOverrideActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference">Wafv2WebAclRuleOverrideActionOutputReference</a>

---

##### `ruleLabel`<sup>Required</sup> <a name="ruleLabel" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.ruleLabel"></a>

```typescript
public readonly ruleLabel: Wafv2WebAclRuleRuleLabelList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList">Wafv2WebAclRuleRuleLabelList</a>

---

##### `statementInput`<sup>Required</sup> <a name="statementInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.statementInput"></a>

```typescript
public readonly statementInput: any;
```

- *Type:* any

---

##### `visibilityConfig`<sup>Required</sup> <a name="visibilityConfig" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.visibilityConfig"></a>

```typescript
public readonly visibilityConfig: Wafv2WebAclRuleVisibilityConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference">Wafv2WebAclRuleVisibilityConfigOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: Wafv2WebAclRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleAction">Wafv2WebAclRuleAction</a>

---

##### `captchaConfigInput`<sup>Optional</sup> <a name="captchaConfigInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.captchaConfigInput"></a>

```typescript
public readonly captchaConfigInput: Wafv2WebAclRuleCaptchaConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleCaptchaConfig">Wafv2WebAclRuleCaptchaConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `overrideActionInput`<sup>Optional</sup> <a name="overrideActionInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.overrideActionInput"></a>

```typescript
public readonly overrideActionInput: Wafv2WebAclRuleOverrideAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `ruleLabelInput`<sup>Optional</sup> <a name="ruleLabelInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.ruleLabelInput"></a>

```typescript
public readonly ruleLabelInput: IResolvable | Wafv2WebAclRuleRuleLabel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>[]

---

##### `visibilityConfigInput`<sup>Optional</sup> <a name="visibilityConfigInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.visibilityConfigInput"></a>

```typescript
public readonly visibilityConfigInput: Wafv2WebAclRuleVisibilityConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.statement"></a>

```typescript
public readonly statement: any;
```

- *Type:* any

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRule">Wafv2WebAclRule</a>

---


### Wafv2WebAclRuleOverrideActionCountOutputReference <a name="Wafv2WebAclRuleOverrideActionCountOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleOverrideActionCount;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a>

---


### Wafv2WebAclRuleOverrideActionNoneOutputReference <a name="Wafv2WebAclRuleOverrideActionNoneOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleOverrideActionNone;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a>

---


### Wafv2WebAclRuleOverrideActionOutputReference <a name="Wafv2WebAclRuleOverrideActionOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putCount">putCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putNone">putNone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resetNone">resetNone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCount` <a name="putCount" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putCount"></a>

```typescript
public putCount(value: Wafv2WebAclRuleOverrideActionCount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a>

---

##### `putNone` <a name="putNone" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putNone"></a>

```typescript
public putNone(value: Wafv2WebAclRuleOverrideActionNone): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.putNone.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a>

---

##### `resetCount` <a name="resetCount" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetNone` <a name="resetNone" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.resetNone"></a>

```typescript
public resetNone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.count">count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference">Wafv2WebAclRuleOverrideActionCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.none">none</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference">Wafv2WebAclRuleOverrideActionNoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.countInput">countInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.noneInput">noneInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.count"></a>

```typescript
public readonly count: Wafv2WebAclRuleOverrideActionCountOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCountOutputReference">Wafv2WebAclRuleOverrideActionCountOutputReference</a>

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.none"></a>

```typescript
public readonly none: Wafv2WebAclRuleOverrideActionNoneOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNoneOutputReference">Wafv2WebAclRuleOverrideActionNoneOutputReference</a>

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.countInput"></a>

```typescript
public readonly countInput: Wafv2WebAclRuleOverrideActionCount;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionCount">Wafv2WebAclRuleOverrideActionCount</a>

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.noneInput"></a>

```typescript
public readonly noneInput: Wafv2WebAclRuleOverrideActionNone;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionNone">Wafv2WebAclRuleOverrideActionNone</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleOverrideAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleOverrideAction">Wafv2WebAclRuleOverrideAction</a>

---


### Wafv2WebAclRuleRuleLabelList <a name="Wafv2WebAclRuleRuleLabelList" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleRuleLabelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.get"></a>

```typescript
public get(index: number): Wafv2WebAclRuleRuleLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclRuleRuleLabel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>[]

---


### Wafv2WebAclRuleRuleLabelOutputReference <a name="Wafv2WebAclRuleRuleLabelOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2WebAclRuleRuleLabel;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleRuleLabel">Wafv2WebAclRuleRuleLabel</a>

---


### Wafv2WebAclRuleVisibilityConfigOutputReference <a name="Wafv2WebAclRuleVisibilityConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput">cloudwatchMetricsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.sampledRequestsEnabledInput">sampledRequestsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled">cloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.sampledRequestsEnabled">sampledRequestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="cloudwatchMetricsEnabledInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```typescript
public readonly cloudwatchMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `sampledRequestsEnabledInput`<sup>Optional</sup> <a name="sampledRequestsEnabledInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.sampledRequestsEnabledInput"></a>

```typescript
public readonly sampledRequestsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudwatchMetricsEnabled`<sup>Required</sup> <a name="cloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled"></a>

```typescript
public readonly cloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `sampledRequestsEnabled`<sup>Required</sup> <a name="sampledRequestsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.sampledRequestsEnabled"></a>

```typescript
public readonly sampledRequestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclRuleVisibilityConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclRuleVisibilityConfig">Wafv2WebAclRuleVisibilityConfig</a>

---


### Wafv2WebAclVisibilityConfigOutputReference <a name="Wafv2WebAclVisibilityConfigOutputReference" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.Initializer"></a>

```typescript
import { wafv2WebAcl } from '@cdktf/provider-aws'

new wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput">cloudwatchMetricsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.sampledRequestsEnabledInput">sampledRequestsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled">cloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.sampledRequestsEnabled">sampledRequestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="cloudwatchMetricsEnabledInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```typescript
public readonly cloudwatchMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `sampledRequestsEnabledInput`<sup>Optional</sup> <a name="sampledRequestsEnabledInput" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.sampledRequestsEnabledInput"></a>

```typescript
public readonly sampledRequestsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudwatchMetricsEnabled`<sup>Required</sup> <a name="cloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled"></a>

```typescript
public readonly cloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `sampledRequestsEnabled`<sup>Required</sup> <a name="sampledRequestsEnabled" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.sampledRequestsEnabled"></a>

```typescript
public readonly sampledRequestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2WebAclVisibilityConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2WebAcl.Wafv2WebAclVisibilityConfig">Wafv2WebAclVisibilityConfig</a>

---



