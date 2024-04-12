# `wafv2RuleGroup` Submodule <a name="`wafv2RuleGroup` Submodule" id="@cdktf/provider-aws.wafv2RuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Wafv2RuleGroup <a name="Wafv2RuleGroup" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group aws_wafv2_rule_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroup(scope: Construct, id: string, config: Wafv2RuleGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig">Wafv2RuleGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig">Wafv2RuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putCustomResponseBody">putCustomResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putVisibilityConfig">putVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetCustomResponseBody">resetCustomResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomResponseBody` <a name="putCustomResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putCustomResponseBody"></a>

```typescript
public putCustomResponseBody(value: IResolvable | Wafv2RuleGroupCustomResponseBody[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putCustomResponseBody.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>[]

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putRule"></a>

```typescript
public putRule(value: IResolvable | Wafv2RuleGroupRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>[]

---

##### `putVisibilityConfig` <a name="putVisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putVisibilityConfig"></a>

```typescript
public putVisibilityConfig(value: Wafv2RuleGroupVisibilityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.putVisibilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

---

##### `resetCustomResponseBody` <a name="resetCustomResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetCustomResponseBody"></a>

```typescript
public resetCustomResponseBody(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetRule"></a>

```typescript
public resetRule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Wafv2RuleGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isConstruct"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

wafv2RuleGroup.Wafv2RuleGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformElement"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

wafv2RuleGroup.Wafv2RuleGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformResource"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

wafv2RuleGroup.Wafv2RuleGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Wafv2RuleGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Wafv2RuleGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Wafv2RuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Wafv2RuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBody">customResponseBody</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList">Wafv2RuleGroupCustomResponseBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lockToken">lockToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList">Wafv2RuleGroupRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfig">visibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference">Wafv2RuleGroupVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacityInput">capacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBodyInput">customResponseBodyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfigInput">visibilityConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `customResponseBody`<sup>Required</sup> <a name="customResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBody"></a>

```typescript
public readonly customResponseBody: Wafv2RuleGroupCustomResponseBodyList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList">Wafv2RuleGroupCustomResponseBodyList</a>

---

##### `lockToken`<sup>Required</sup> <a name="lockToken" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.lockToken"></a>

```typescript
public readonly lockToken: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.rule"></a>

```typescript
public readonly rule: Wafv2RuleGroupRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList">Wafv2RuleGroupRuleList</a>

---

##### `visibilityConfig`<sup>Required</sup> <a name="visibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfig"></a>

```typescript
public readonly visibilityConfig: Wafv2RuleGroupVisibilityConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference">Wafv2RuleGroupVisibilityConfigOutputReference</a>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacityInput"></a>

```typescript
public readonly capacityInput: number;
```

- *Type:* number

---

##### `customResponseBodyInput`<sup>Optional</sup> <a name="customResponseBodyInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.customResponseBodyInput"></a>

```typescript
public readonly customResponseBodyInput: IResolvable | Wafv2RuleGroupCustomResponseBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | Wafv2RuleGroupRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>[]

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `visibilityConfigInput`<sup>Optional</sup> <a name="visibilityConfigInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.visibilityConfigInput"></a>

```typescript
public readonly visibilityConfigInput: Wafv2RuleGroupVisibilityConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Wafv2RuleGroupConfig <a name="Wafv2RuleGroupConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupConfig: wafv2RuleGroup.Wafv2RuleGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.capacity">capacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#capacity Wafv2RuleGroup#capacity}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#scope Wafv2RuleGroup#scope}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.visibilityConfig">visibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.customResponseBody">customResponseBody</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>[]</code> | custom_response_body block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#description Wafv2RuleGroup#description}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#id Wafv2RuleGroup#id}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name_prefix Wafv2RuleGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#tags Wafv2RuleGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#tags_all Wafv2RuleGroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#capacity Wafv2RuleGroup#capacity}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#scope Wafv2RuleGroup#scope}.

---

##### `visibilityConfig`<sup>Required</sup> <a name="visibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.visibilityConfig"></a>

```typescript
public readonly visibilityConfig: Wafv2RuleGroupVisibilityConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#visibility_config Wafv2RuleGroup#visibility_config}

---

##### `customResponseBody`<sup>Optional</sup> <a name="customResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.customResponseBody"></a>

```typescript
public readonly customResponseBody: IResolvable | Wafv2RuleGroupCustomResponseBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>[]

custom_response_body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#custom_response_body Wafv2RuleGroup#custom_response_body}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#description Wafv2RuleGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#id Wafv2RuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name_prefix Wafv2RuleGroup#name_prefix}.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | Wafv2RuleGroupRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#rule Wafv2RuleGroup#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#tags Wafv2RuleGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#tags_all Wafv2RuleGroup#tags_all}.

---

### Wafv2RuleGroupCustomResponseBody <a name="Wafv2RuleGroupCustomResponseBody" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupCustomResponseBody: wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#content Wafv2RuleGroup#content}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#content_type Wafv2RuleGroup#content_type}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#key Wafv2RuleGroup#key}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#content Wafv2RuleGroup#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#content_type Wafv2RuleGroup#content_type}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#key Wafv2RuleGroup#key}.

---

### Wafv2RuleGroupRule <a name="Wafv2RuleGroupRule" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRule: wafv2RuleGroup.Wafv2RuleGroupRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.visibilityConfig">visibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a></code> | visibility_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.captchaConfig">captchaConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a></code> | captcha_config block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.ruleLabel">ruleLabel</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>[]</code> | rule_label block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.statement">statement</a></code> | <code>any</code> | statement block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.action"></a>

```typescript
public readonly action: Wafv2RuleGroupRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#action Wafv2RuleGroup#action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#priority Wafv2RuleGroup#priority}.

---

##### `visibilityConfig`<sup>Required</sup> <a name="visibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.visibilityConfig"></a>

```typescript
public readonly visibilityConfig: Wafv2RuleGroupRuleVisibilityConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a>

visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#visibility_config Wafv2RuleGroup#visibility_config}

---

##### `captchaConfig`<sup>Optional</sup> <a name="captchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.captchaConfig"></a>

```typescript
public readonly captchaConfig: Wafv2RuleGroupRuleCaptchaConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a>

captcha_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#captcha_config Wafv2RuleGroup#captcha_config}

---

##### `ruleLabel`<sup>Optional</sup> <a name="ruleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.ruleLabel"></a>

```typescript
public readonly ruleLabel: IResolvable | Wafv2RuleGroupRuleRuleLabel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>[]

rule_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#rule_label Wafv2RuleGroup#rule_label}

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule.property.statement"></a>

```typescript
public readonly statement: any;
```

- *Type:* any

statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#statement Wafv2RuleGroup#statement}

---

### Wafv2RuleGroupRuleAction <a name="Wafv2RuleGroupRuleAction" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleAction: wafv2RuleGroup.Wafv2RuleGroupRuleAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.block">block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a></code> | block block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.captcha">captcha</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a></code> | captcha block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.challenge">challenge</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a></code> | challenge block. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.count">count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a></code> | count block. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.allow"></a>

```typescript
public readonly allow: Wafv2RuleGroupRuleActionAllow;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#allow Wafv2RuleGroup#allow}

---

##### `block`<sup>Optional</sup> <a name="block" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.block"></a>

```typescript
public readonly block: Wafv2RuleGroupRuleActionBlock;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

block block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#block Wafv2RuleGroup#block}

---

##### `captcha`<sup>Optional</sup> <a name="captcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.captcha"></a>

```typescript
public readonly captcha: Wafv2RuleGroupRuleActionCaptcha;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

captcha block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#captcha Wafv2RuleGroup#captcha}

---

##### `challenge`<sup>Optional</sup> <a name="challenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.challenge"></a>

```typescript
public readonly challenge: Wafv2RuleGroupRuleActionChallenge;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

challenge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#challenge Wafv2RuleGroup#challenge}

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction.property.count"></a>

```typescript
public readonly count: Wafv2RuleGroupRuleActionCount;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#count Wafv2RuleGroup#count}

---

### Wafv2RuleGroupRuleActionAllow <a name="Wafv2RuleGroupRuleActionAllow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleActionAllow: wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `customRequestHandling`<sup>Optional</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2RuleGroupRuleActionAllowCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionAllowCustomRequestHandling <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleActionAllowCustomRequestHandling: wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling.property.insertHeader">insertHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>[]</code> | insert_header block. |

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling.property.insertHeader"></a>

```typescript
public readonly insertHeader: IResolvable | Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>[]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader: wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionBlock <a name="Wafv2RuleGroupRuleActionBlock" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleActionBlock: wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock.property.customResponse">customResponse</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a></code> | custom_response block. |

---

##### `customResponse`<sup>Optional</sup> <a name="customResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock.property.customResponse"></a>

```typescript
public readonly customResponse: Wafv2RuleGroupRuleActionBlockCustomResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

custom_response block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#custom_response Wafv2RuleGroup#custom_response}

---

### Wafv2RuleGroupRuleActionBlockCustomResponse <a name="Wafv2RuleGroupRuleActionBlockCustomResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleActionBlockCustomResponse: wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseCode">responseCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#response_code Wafv2RuleGroup#response_code}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.customResponseBodyKey">customResponseBodyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#custom_response_body_key Wafv2RuleGroup#custom_response_body_key}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseHeader">responseHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>[]</code> | response_header block. |

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#response_code Wafv2RuleGroup#response_code}.

---

##### `customResponseBodyKey`<sup>Optional</sup> <a name="customResponseBodyKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.customResponseBodyKey"></a>

```typescript
public readonly customResponseBodyKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#custom_response_body_key Wafv2RuleGroup#custom_response_body_key}.

---

##### `responseHeader`<sup>Optional</sup> <a name="responseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse.property.responseHeader"></a>

```typescript
public readonly responseHeader: IResolvable | Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>[]

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#response_header Wafv2RuleGroup#response_header}

---

### Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader <a name="Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader: wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionCaptcha <a name="Wafv2RuleGroupRuleActionCaptcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleActionCaptcha: wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `customRequestHandling`<sup>Optional</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleActionCaptchaCustomRequestHandling: wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling.property.insertHeader">insertHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>[]</code> | insert_header block. |

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling.property.insertHeader"></a>

```typescript
public readonly insertHeader: IResolvable | Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>[]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader: wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionChallenge <a name="Wafv2RuleGroupRuleActionChallenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleActionChallenge: wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `customRequestHandling`<sup>Optional</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2RuleGroupRuleActionChallengeCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionChallengeCustomRequestHandling <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleActionChallengeCustomRequestHandling: wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling.property.insertHeader">insertHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>[]</code> | insert_header block. |

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling.property.insertHeader"></a>

```typescript
public readonly insertHeader: IResolvable | Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>[]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader: wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleActionCount <a name="Wafv2RuleGroupRuleActionCount" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleActionCount: wafv2RuleGroup.Wafv2RuleGroupRuleActionCount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a></code> | custom_request_handling block. |

---

##### `customRequestHandling`<sup>Optional</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2RuleGroupRuleActionCountCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

custom_request_handling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#custom_request_handling Wafv2RuleGroup#custom_request_handling}

---

### Wafv2RuleGroupRuleActionCountCustomRequestHandling <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleActionCountCustomRequestHandling: wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling.property.insertHeader">insertHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>[]</code> | insert_header block. |

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling.property.insertHeader"></a>

```typescript
public readonly insertHeader: IResolvable | Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>[]

insert_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#insert_header Wafv2RuleGroup#insert_header}

---

### Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader: wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#value Wafv2RuleGroup#value}.

---

### Wafv2RuleGroupRuleCaptchaConfig <a name="Wafv2RuleGroupRuleCaptchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleCaptchaConfig: wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig.property.immunityTimeProperty">immunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a></code> | immunity_time_property block. |

---

##### `immunityTimeProperty`<sup>Optional</sup> <a name="immunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig.property.immunityTimeProperty"></a>

```typescript
public readonly immunityTimeProperty: Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

immunity_time_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#immunity_time_property Wafv2RuleGroup#immunity_time_property}

---

### Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty <a name="Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty: wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty.property.immunityTime">immunityTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#immunity_time Wafv2RuleGroup#immunity_time}. |

---

##### `immunityTime`<sup>Optional</sup> <a name="immunityTime" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty.property.immunityTime"></a>

```typescript
public readonly immunityTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#immunity_time Wafv2RuleGroup#immunity_time}.

---

### Wafv2RuleGroupRuleRuleLabel <a name="Wafv2RuleGroupRuleRuleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleRuleLabel: wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#name Wafv2RuleGroup#name}.

---

### Wafv2RuleGroupRuleVisibilityConfig <a name="Wafv2RuleGroupRuleVisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupRuleVisibilityConfig: wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.cloudwatchMetricsEnabled">cloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.sampledRequestsEnabled">sampledRequestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}. |

---

##### `cloudwatchMetricsEnabled`<sup>Required</sup> <a name="cloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.cloudwatchMetricsEnabled"></a>

```typescript
public readonly cloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}.

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}.

---

##### `sampledRequestsEnabled`<sup>Required</sup> <a name="sampledRequestsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig.property.sampledRequestsEnabled"></a>

```typescript
public readonly sampledRequestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}.

---

### Wafv2RuleGroupVisibilityConfig <a name="Wafv2RuleGroupVisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

const wafv2RuleGroupVisibilityConfig: wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.cloudwatchMetricsEnabled">cloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.sampledRequestsEnabled">sampledRequestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}. |

---

##### `cloudwatchMetricsEnabled`<sup>Required</sup> <a name="cloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.cloudwatchMetricsEnabled"></a>

```typescript
public readonly cloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#cloudwatch_metrics_enabled Wafv2RuleGroup#cloudwatch_metrics_enabled}.

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#metric_name Wafv2RuleGroup#metric_name}.

---

##### `sampledRequestsEnabled`<sup>Required</sup> <a name="sampledRequestsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig.property.sampledRequestsEnabled"></a>

```typescript
public readonly sampledRequestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/resources/wafv2_rule_group#sampled_requests_enabled Wafv2RuleGroup#sampled_requests_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2RuleGroupCustomResponseBodyList <a name="Wafv2RuleGroupCustomResponseBodyList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.get"></a>

```typescript
public get(index: number): Wafv2RuleGroupCustomResponseBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupCustomResponseBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>[]

---


### Wafv2RuleGroupCustomResponseBodyOutputReference <a name="Wafv2RuleGroupCustomResponseBodyOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBodyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupCustomResponseBody;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupCustomResponseBody">Wafv2RuleGroupCustomResponseBody</a>

---


### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.get"></a>

```typescript
public get(index: number): Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>[]

---


### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>

---


### Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader">putInsertHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInsertHeader` <a name="putInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader"></a>

```typescript
public putInsertHeader(value: IResolvable | Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeader">insertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput">insertHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeader"></a>

```typescript
public readonly insertHeader: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeaderList</a>

---

##### `insertHeaderInput`<sup>Optional</sup> <a name="insertHeaderInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```typescript
public readonly insertHeaderInput: IResolvable | Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingInsertHeader</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RuleGroupRuleActionAllowCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionAllowOutputReference <a name="Wafv2RuleGroupRuleActionAllowOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.putCustomRequestHandling">putCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resetCustomRequestHandling">resetCustomRequestHandling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRequestHandling` <a name="putCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.putCustomRequestHandling"></a>

```typescript
public putCustomRequestHandling(value: Wafv2RuleGroupRuleActionAllowCustomRequestHandling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

---

##### `resetCustomRequestHandling` <a name="resetCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.resetCustomRequestHandling"></a>

```typescript
public resetCustomRequestHandling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandlingInput">customRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRequestHandling`<sup>Required</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionAllowCustomRequestHandlingOutputReference</a>

---

##### `customRequestHandlingInput`<sup>Optional</sup> <a name="customRequestHandlingInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.customRequestHandlingInput"></a>

```typescript
public readonly customRequestHandlingInput: Wafv2RuleGroupRuleActionAllowCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowCustomRequestHandling">Wafv2RuleGroupRuleActionAllowCustomRequestHandling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RuleGroupRuleActionAllow;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

---


### Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference <a name="Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.putResponseHeader">putResponseHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey">resetCustomResponseBodyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetResponseHeader">resetResponseHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResponseHeader` <a name="putResponseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.putResponseHeader"></a>

```typescript
public putResponseHeader(value: IResolvable | Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.putResponseHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>[]

---

##### `resetCustomResponseBodyKey` <a name="resetCustomResponseBodyKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetCustomResponseBodyKey"></a>

```typescript
public resetCustomResponseBodyKey(): void
```

##### `resetResponseHeader` <a name="resetResponseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.resetResponseHeader"></a>

```typescript
public resetResponseHeader(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeader">responseHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput">customResponseBodyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCodeInput">responseCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeaderInput">responseHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKey">customResponseBodyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCode">responseCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `responseHeader`<sup>Required</sup> <a name="responseHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeader"></a>

```typescript
public readonly responseHeader: Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList</a>

---

##### `customResponseBodyKeyInput`<sup>Optional</sup> <a name="customResponseBodyKeyInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKeyInput"></a>

```typescript
public readonly customResponseBodyKeyInput: string;
```

- *Type:* string

---

##### `responseCodeInput`<sup>Optional</sup> <a name="responseCodeInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCodeInput"></a>

```typescript
public readonly responseCodeInput: number;
```

- *Type:* number

---

##### `responseHeaderInput`<sup>Optional</sup> <a name="responseHeaderInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseHeaderInput"></a>

```typescript
public readonly responseHeaderInput: IResolvable | Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>[]

---

##### `customResponseBodyKey`<sup>Required</sup> <a name="customResponseBodyKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.customResponseBodyKey"></a>

```typescript
public readonly customResponseBodyKey: string;
```

- *Type:* string

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RuleGroupRuleActionBlockCustomResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

---


### Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList <a name="Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.get"></a>

```typescript
public get(index: number): Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>[]

---


### Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference <a name="Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader">Wafv2RuleGroupRuleActionBlockCustomResponseResponseHeader</a>

---


### Wafv2RuleGroupRuleActionBlockOutputReference <a name="Wafv2RuleGroupRuleActionBlockOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.putCustomResponse">putCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resetCustomResponse">resetCustomResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomResponse` <a name="putCustomResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.putCustomResponse"></a>

```typescript
public putCustomResponse(value: Wafv2RuleGroupRuleActionBlockCustomResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.putCustomResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

---

##### `resetCustomResponse` <a name="resetCustomResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.resetCustomResponse"></a>

```typescript
public resetCustomResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponse">customResponse</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference">Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponseInput">customResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customResponse`<sup>Required</sup> <a name="customResponse" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponse"></a>

```typescript
public readonly customResponse: Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference">Wafv2RuleGroupRuleActionBlockCustomResponseOutputReference</a>

---

##### `customResponseInput`<sup>Optional</sup> <a name="customResponseInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.customResponseInput"></a>

```typescript
public readonly customResponseInput: Wafv2RuleGroupRuleActionBlockCustomResponse;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockCustomResponse">Wafv2RuleGroupRuleActionBlockCustomResponse</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RuleGroupRuleActionBlock;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

---


### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get"></a>

```typescript
public get(index: number): Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>[]

---


### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>

---


### Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader">putInsertHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInsertHeader` <a name="putInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader"></a>

```typescript
public putInsertHeader(value: IResolvable | Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader">insertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeaderInput">insertHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader"></a>

```typescript
public readonly insertHeader: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeaderList</a>

---

##### `insertHeaderInput`<sup>Optional</sup> <a name="insertHeaderInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```typescript
public readonly insertHeaderInput: IResolvable | Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingInsertHeader</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionCaptchaOutputReference <a name="Wafv2RuleGroupRuleActionCaptchaOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.putCustomRequestHandling">putCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resetCustomRequestHandling">resetCustomRequestHandling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRequestHandling` <a name="putCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.putCustomRequestHandling"></a>

```typescript
public putCustomRequestHandling(value: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

---

##### `resetCustomRequestHandling` <a name="resetCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.resetCustomRequestHandling"></a>

```typescript
public resetCustomRequestHandling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandlingInput">customRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRequestHandling`<sup>Required</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandlingOutputReference</a>

---

##### `customRequestHandlingInput`<sup>Optional</sup> <a name="customRequestHandlingInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.customRequestHandlingInput"></a>

```typescript
public readonly customRequestHandlingInput: Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling">Wafv2RuleGroupRuleActionCaptchaCustomRequestHandling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RuleGroupRuleActionCaptcha;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

---


### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.get"></a>

```typescript
public get(index: number): Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>[]

---


### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>

---


### Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader">putInsertHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInsertHeader` <a name="putInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader"></a>

```typescript
public putInsertHeader(value: IResolvable | Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeader">insertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeaderInput">insertHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeader"></a>

```typescript
public readonly insertHeader: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeaderList</a>

---

##### `insertHeaderInput`<sup>Optional</sup> <a name="insertHeaderInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```typescript
public readonly insertHeaderInput: IResolvable | Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingInsertHeader</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RuleGroupRuleActionChallengeCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionChallengeOutputReference <a name="Wafv2RuleGroupRuleActionChallengeOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.putCustomRequestHandling">putCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resetCustomRequestHandling">resetCustomRequestHandling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRequestHandling` <a name="putCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.putCustomRequestHandling"></a>

```typescript
public putCustomRequestHandling(value: Wafv2RuleGroupRuleActionChallengeCustomRequestHandling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

---

##### `resetCustomRequestHandling` <a name="resetCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.resetCustomRequestHandling"></a>

```typescript
public resetCustomRequestHandling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandlingInput">customRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRequestHandling`<sup>Required</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionChallengeCustomRequestHandlingOutputReference</a>

---

##### `customRequestHandlingInput`<sup>Optional</sup> <a name="customRequestHandlingInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.customRequestHandlingInput"></a>

```typescript
public readonly customRequestHandlingInput: Wafv2RuleGroupRuleActionChallengeCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeCustomRequestHandling">Wafv2RuleGroupRuleActionChallengeCustomRequestHandling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RuleGroupRuleActionChallenge;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

---


### Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.get"></a>

```typescript
public get(index: number): Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>[]

---


### Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>

---


### Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference <a name="Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader">putInsertHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInsertHeader` <a name="putInsertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader"></a>

```typescript
public putInsertHeader(value: IResolvable | Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.putInsertHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeader">insertHeader</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeaderInput">insertHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeader"></a>

```typescript
public readonly insertHeader: Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeaderList</a>

---

##### `insertHeaderInput`<sup>Optional</sup> <a name="insertHeaderInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.insertHeaderInput"></a>

```typescript
public readonly insertHeaderInput: IResolvable | Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader">Wafv2RuleGroupRuleActionCountCustomRequestHandlingInsertHeader</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RuleGroupRuleActionCountCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

---


### Wafv2RuleGroupRuleActionCountOutputReference <a name="Wafv2RuleGroupRuleActionCountOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.putCustomRequestHandling">putCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resetCustomRequestHandling">resetCustomRequestHandling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomRequestHandling` <a name="putCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.putCustomRequestHandling"></a>

```typescript
public putCustomRequestHandling(value: Wafv2RuleGroupRuleActionCountCustomRequestHandling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.putCustomRequestHandling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

---

##### `resetCustomRequestHandling` <a name="resetCustomRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.resetCustomRequestHandling"></a>

```typescript
public resetCustomRequestHandling(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandlingInput">customRequestHandlingInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customRequestHandling`<sup>Required</sup> <a name="customRequestHandling" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandling"></a>

```typescript
public readonly customRequestHandling: Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference">Wafv2RuleGroupRuleActionCountCustomRequestHandlingOutputReference</a>

---

##### `customRequestHandlingInput`<sup>Optional</sup> <a name="customRequestHandlingInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.customRequestHandlingInput"></a>

```typescript
public readonly customRequestHandlingInput: Wafv2RuleGroupRuleActionCountCustomRequestHandling;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountCustomRequestHandling">Wafv2RuleGroupRuleActionCountCustomRequestHandling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RuleGroupRuleActionCount;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

---


### Wafv2RuleGroupRuleActionOutputReference <a name="Wafv2RuleGroupRuleActionOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putBlock">putBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCaptcha">putCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putChallenge">putChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCount">putCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetBlock">resetBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCaptcha">resetCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetChallenge">resetChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCount">resetCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllow` <a name="putAllow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putAllow"></a>

```typescript
public putAllow(value: Wafv2RuleGroupRuleActionAllow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

---

##### `putBlock` <a name="putBlock" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putBlock"></a>

```typescript
public putBlock(value: Wafv2RuleGroupRuleActionBlock): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

---

##### `putCaptcha` <a name="putCaptcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCaptcha"></a>

```typescript
public putCaptcha(value: Wafv2RuleGroupRuleActionCaptcha): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCaptcha.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

---

##### `putChallenge` <a name="putChallenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putChallenge"></a>

```typescript
public putChallenge(value: Wafv2RuleGroupRuleActionChallenge): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putChallenge.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

---

##### `putCount` <a name="putCount" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCount"></a>

```typescript
public putCount(value: Wafv2RuleGroupRuleActionCount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.putCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetAllow"></a>

```typescript
public resetAllow(): void
```

##### `resetBlock` <a name="resetBlock" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetBlock"></a>

```typescript
public resetBlock(): void
```

##### `resetCaptcha` <a name="resetCaptcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCaptcha"></a>

```typescript
public resetCaptcha(): void
```

##### `resetChallenge` <a name="resetChallenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetChallenge"></a>

```typescript
public resetChallenge(): void
```

##### `resetCount` <a name="resetCount" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference">Wafv2RuleGroupRuleActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.block">block</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference">Wafv2RuleGroupRuleActionBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captcha">captcha</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference">Wafv2RuleGroupRuleActionCaptchaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challenge">challenge</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference">Wafv2RuleGroupRuleActionChallengeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.count">count</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference">Wafv2RuleGroupRuleActionCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allowInput">allowInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.blockInput">blockInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captchaInput">captchaInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challengeInput">challengeInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.countInput">countInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allow"></a>

```typescript
public readonly allow: Wafv2RuleGroupRuleActionAllowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllowOutputReference">Wafv2RuleGroupRuleActionAllowOutputReference</a>

---

##### `block`<sup>Required</sup> <a name="block" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.block"></a>

```typescript
public readonly block: Wafv2RuleGroupRuleActionBlockOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlockOutputReference">Wafv2RuleGroupRuleActionBlockOutputReference</a>

---

##### `captcha`<sup>Required</sup> <a name="captcha" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captcha"></a>

```typescript
public readonly captcha: Wafv2RuleGroupRuleActionCaptchaOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptchaOutputReference">Wafv2RuleGroupRuleActionCaptchaOutputReference</a>

---

##### `challenge`<sup>Required</sup> <a name="challenge" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challenge"></a>

```typescript
public readonly challenge: Wafv2RuleGroupRuleActionChallengeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallengeOutputReference">Wafv2RuleGroupRuleActionChallengeOutputReference</a>

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.count"></a>

```typescript
public readonly count: Wafv2RuleGroupRuleActionCountOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCountOutputReference">Wafv2RuleGroupRuleActionCountOutputReference</a>

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.allowInput"></a>

```typescript
public readonly allowInput: Wafv2RuleGroupRuleActionAllow;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionAllow">Wafv2RuleGroupRuleActionAllow</a>

---

##### `blockInput`<sup>Optional</sup> <a name="blockInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.blockInput"></a>

```typescript
public readonly blockInput: Wafv2RuleGroupRuleActionBlock;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionBlock">Wafv2RuleGroupRuleActionBlock</a>

---

##### `captchaInput`<sup>Optional</sup> <a name="captchaInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.captchaInput"></a>

```typescript
public readonly captchaInput: Wafv2RuleGroupRuleActionCaptcha;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCaptcha">Wafv2RuleGroupRuleActionCaptcha</a>

---

##### `challengeInput`<sup>Optional</sup> <a name="challengeInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.challengeInput"></a>

```typescript
public readonly challengeInput: Wafv2RuleGroupRuleActionChallenge;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionChallenge">Wafv2RuleGroupRuleActionChallenge</a>

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.countInput"></a>

```typescript
public readonly countInput: Wafv2RuleGroupRuleActionCount;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionCount">Wafv2RuleGroupRuleActionCount</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RuleGroupRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a>

---


### Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference <a name="Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime">resetImmunityTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImmunityTime` <a name="resetImmunityTime" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.resetImmunityTime"></a>

```typescript
public resetImmunityTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput">immunityTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime">immunityTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `immunityTimeInput`<sup>Optional</sup> <a name="immunityTimeInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTimeInput"></a>

```typescript
public readonly immunityTimeInput: number;
```

- *Type:* number

---

##### `immunityTime`<sup>Required</sup> <a name="immunityTime" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.immunityTime"></a>

```typescript
public readonly immunityTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

---


### Wafv2RuleGroupRuleCaptchaConfigOutputReference <a name="Wafv2RuleGroupRuleCaptchaConfigOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.putImmunityTimeProperty">putImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resetImmunityTimeProperty">resetImmunityTimeProperty</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImmunityTimeProperty` <a name="putImmunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.putImmunityTimeProperty"></a>

```typescript
public putImmunityTimeProperty(value: Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.putImmunityTimeProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

---

##### `resetImmunityTimeProperty` <a name="resetImmunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.resetImmunityTimeProperty"></a>

```typescript
public resetImmunityTimeProperty(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimeProperty">immunityTimeProperty</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference">Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimePropertyInput">immunityTimePropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `immunityTimeProperty`<sup>Required</sup> <a name="immunityTimeProperty" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimeProperty"></a>

```typescript
public readonly immunityTimeProperty: Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference">Wafv2RuleGroupRuleCaptchaConfigImmunityTimePropertyOutputReference</a>

---

##### `immunityTimePropertyInput`<sup>Optional</sup> <a name="immunityTimePropertyInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.immunityTimePropertyInput"></a>

```typescript
public readonly immunityTimePropertyInput: Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty">Wafv2RuleGroupRuleCaptchaConfigImmunityTimeProperty</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RuleGroupRuleCaptchaConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a>

---


### Wafv2RuleGroupRuleList <a name="Wafv2RuleGroupRuleList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.get"></a>

```typescript
public get(index: number): Wafv2RuleGroupRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>[]

---


### Wafv2RuleGroupRuleOutputReference <a name="Wafv2RuleGroupRuleOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putCaptchaConfig">putCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putRuleLabel">putRuleLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putVisibilityConfig">putVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetCaptchaConfig">resetCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetRuleLabel">resetRuleLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetStatement">resetStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction"></a>

```typescript
public putAction(value: Wafv2RuleGroupRuleAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a>

---

##### `putCaptchaConfig` <a name="putCaptchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putCaptchaConfig"></a>

```typescript
public putCaptchaConfig(value: Wafv2RuleGroupRuleCaptchaConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putCaptchaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a>

---

##### `putRuleLabel` <a name="putRuleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putRuleLabel"></a>

```typescript
public putRuleLabel(value: IResolvable | Wafv2RuleGroupRuleRuleLabel[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putRuleLabel.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>[]

---

##### `putVisibilityConfig` <a name="putVisibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putVisibilityConfig"></a>

```typescript
public putVisibilityConfig(value: Wafv2RuleGroupRuleVisibilityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.putVisibilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a>

---

##### `resetCaptchaConfig` <a name="resetCaptchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetCaptchaConfig"></a>

```typescript
public resetCaptchaConfig(): void
```

##### `resetRuleLabel` <a name="resetRuleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetRuleLabel"></a>

```typescript
public resetRuleLabel(): void
```

##### `resetStatement` <a name="resetStatement" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.resetStatement"></a>

```typescript
public resetStatement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference">Wafv2RuleGroupRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfig">captchaConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference">Wafv2RuleGroupRuleCaptchaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabel">ruleLabel</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList">Wafv2RuleGroupRuleRuleLabelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statementInput">statementInput</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfig">visibilityConfig</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference">Wafv2RuleGroupRuleVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfigInput">captchaConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabelInput">ruleLabelInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfigInput">visibilityConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statement">statement</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.action"></a>

```typescript
public readonly action: Wafv2RuleGroupRuleActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleActionOutputReference">Wafv2RuleGroupRuleActionOutputReference</a>

---

##### `captchaConfig`<sup>Required</sup> <a name="captchaConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfig"></a>

```typescript
public readonly captchaConfig: Wafv2RuleGroupRuleCaptchaConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfigOutputReference">Wafv2RuleGroupRuleCaptchaConfigOutputReference</a>

---

##### `ruleLabel`<sup>Required</sup> <a name="ruleLabel" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabel"></a>

```typescript
public readonly ruleLabel: Wafv2RuleGroupRuleRuleLabelList;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList">Wafv2RuleGroupRuleRuleLabelList</a>

---

##### `statementInput`<sup>Required</sup> <a name="statementInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statementInput"></a>

```typescript
public readonly statementInput: any;
```

- *Type:* any

---

##### `visibilityConfig`<sup>Required</sup> <a name="visibilityConfig" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfig"></a>

```typescript
public readonly visibilityConfig: Wafv2RuleGroupRuleVisibilityConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference">Wafv2RuleGroupRuleVisibilityConfigOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: Wafv2RuleGroupRuleAction;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleAction">Wafv2RuleGroupRuleAction</a>

---

##### `captchaConfigInput`<sup>Optional</sup> <a name="captchaConfigInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.captchaConfigInput"></a>

```typescript
public readonly captchaConfigInput: Wafv2RuleGroupRuleCaptchaConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleCaptchaConfig">Wafv2RuleGroupRuleCaptchaConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `ruleLabelInput`<sup>Optional</sup> <a name="ruleLabelInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.ruleLabelInput"></a>

```typescript
public readonly ruleLabelInput: IResolvable | Wafv2RuleGroupRuleRuleLabel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>[]

---

##### `visibilityConfigInput`<sup>Optional</sup> <a name="visibilityConfigInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.visibilityConfigInput"></a>

```typescript
public readonly visibilityConfigInput: Wafv2RuleGroupRuleVisibilityConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.statement"></a>

```typescript
public readonly statement: any;
```

- *Type:* any

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRule">Wafv2RuleGroupRule</a>

---


### Wafv2RuleGroupRuleRuleLabelList <a name="Wafv2RuleGroupRuleRuleLabelList" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.get"></a>

```typescript
public get(index: number): Wafv2RuleGroupRuleRuleLabelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupRuleRuleLabel[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>[]

---


### Wafv2RuleGroupRuleRuleLabelOutputReference <a name="Wafv2RuleGroupRuleRuleLabelOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Wafv2RuleGroupRuleRuleLabel;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleRuleLabel">Wafv2RuleGroupRuleRuleLabel</a>

---


### Wafv2RuleGroupRuleVisibilityConfigOutputReference <a name="Wafv2RuleGroupRuleVisibilityConfigOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput">cloudwatchMetricsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabledInput">sampledRequestsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled">cloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabled">sampledRequestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="cloudwatchMetricsEnabledInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```typescript
public readonly cloudwatchMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `sampledRequestsEnabledInput`<sup>Optional</sup> <a name="sampledRequestsEnabledInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabledInput"></a>

```typescript
public readonly sampledRequestsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudwatchMetricsEnabled`<sup>Required</sup> <a name="cloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled"></a>

```typescript
public readonly cloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `sampledRequestsEnabled`<sup>Required</sup> <a name="sampledRequestsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.sampledRequestsEnabled"></a>

```typescript
public readonly sampledRequestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RuleGroupRuleVisibilityConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupRuleVisibilityConfig">Wafv2RuleGroupRuleVisibilityConfig</a>

---


### Wafv2RuleGroupVisibilityConfigOutputReference <a name="Wafv2RuleGroupVisibilityConfigOutputReference" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer"></a>

```typescript
import { wafv2RuleGroup } from '@cdktf/provider-aws'

new wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput">cloudwatchMetricsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabledInput">sampledRequestsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled">cloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabled">sampledRequestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="cloudwatchMetricsEnabledInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```typescript
public readonly cloudwatchMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `sampledRequestsEnabledInput`<sup>Optional</sup> <a name="sampledRequestsEnabledInput" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabledInput"></a>

```typescript
public readonly sampledRequestsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cloudwatchMetricsEnabled`<sup>Required</sup> <a name="cloudwatchMetricsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.cloudwatchMetricsEnabled"></a>

```typescript
public readonly cloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `sampledRequestsEnabled`<sup>Required</sup> <a name="sampledRequestsEnabled" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.sampledRequestsEnabled"></a>

```typescript
public readonly sampledRequestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Wafv2RuleGroupVisibilityConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RuleGroup.Wafv2RuleGroupVisibilityConfig">Wafv2RuleGroupVisibilityConfig</a>

---



