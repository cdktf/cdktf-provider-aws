# `codestarnotificationsNotificationRule` Submodule <a name="`codestarnotificationsNotificationRule` Submodule" id="@cdktf/provider-aws.codestarnotificationsNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarnotificationsNotificationRule <a name="CodestarnotificationsNotificationRule" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule aws_codestarnotifications_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer"></a>

```typescript
import { codestarnotificationsNotificationRule } from '@cdktf/provider-aws'

new codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule(scope: Construct, id: string, config: CodestarnotificationsNotificationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig">CodestarnotificationsNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig">CodestarnotificationsNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.putTarget"></a>

```typescript
public putTarget(value: IResolvable | CodestarnotificationsNotificationRuleTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.putTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTarget"></a>

```typescript
public resetTarget(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct"></a>

```typescript
import { codestarnotificationsNotificationRule } from '@cdktf/provider-aws'

codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement"></a>

```typescript
import { codestarnotificationsNotificationRule } from '@cdktf/provider-aws'

codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource"></a>

```typescript
import { codestarnotificationsNotificationRule } from '@cdktf/provider-aws'

codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList">CodestarnotificationsNotificationRuleTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailTypeInput">detailTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIdsInput">eventTypeIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetInput">targetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailType">detailType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIds">eventTypeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.target"></a>

```typescript
public readonly target: CodestarnotificationsNotificationRuleTargetList;
```

- *Type:* <a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList">CodestarnotificationsNotificationRuleTargetList</a>

---

##### `detailTypeInput`<sup>Optional</sup> <a name="detailTypeInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailTypeInput"></a>

```typescript
public readonly detailTypeInput: string;
```

- *Type:* string

---

##### `eventTypeIdsInput`<sup>Optional</sup> <a name="eventTypeIdsInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIdsInput"></a>

```typescript
public readonly eventTypeIdsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetInput"></a>

```typescript
public readonly targetInput: IResolvable | CodestarnotificationsNotificationRuleTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>[]

---

##### `detailType`<sup>Required</sup> <a name="detailType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailType"></a>

```typescript
public readonly detailType: string;
```

- *Type:* string

---

##### `eventTypeIds`<sup>Required</sup> <a name="eventTypeIds" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIds"></a>

```typescript
public readonly eventTypeIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarnotificationsNotificationRuleConfig <a name="CodestarnotificationsNotificationRuleConfig" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.Initializer"></a>

```typescript
import { codestarnotificationsNotificationRule } from '@cdktf/provider-aws'

const codestarnotificationsNotificationRuleConfig: codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.detailType">detailType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.eventTypeIds">eventTypeIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.resource">resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#id CodestarnotificationsNotificationRule#id}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags_all CodestarnotificationsNotificationRule#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.target">target</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>[]</code> | target block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `detailType`<sup>Required</sup> <a name="detailType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.detailType"></a>

```typescript
public readonly detailType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}.

---

##### `eventTypeIds`<sup>Required</sup> <a name="eventTypeIds" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.eventTypeIds"></a>

```typescript
public readonly eventTypeIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#id CodestarnotificationsNotificationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags_all CodestarnotificationsNotificationRule#tags_all}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.target"></a>

```typescript
public readonly target: IResolvable | CodestarnotificationsNotificationRuleTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>[]

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#target CodestarnotificationsNotificationRule#target}

---

### CodestarnotificationsNotificationRuleTarget <a name="CodestarnotificationsNotificationRuleTarget" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget.Initializer"></a>

```typescript
import { codestarnotificationsNotificationRule } from '@cdktf/provider-aws'

const codestarnotificationsNotificationRuleTarget: codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#address CodestarnotificationsNotificationRule#address}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#type CodestarnotificationsNotificationRule#type}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#address CodestarnotificationsNotificationRule#address}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#type CodestarnotificationsNotificationRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodestarnotificationsNotificationRuleTargetList <a name="CodestarnotificationsNotificationRuleTargetList" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer"></a>

```typescript
import { codestarnotificationsNotificationRule } from '@cdktf/provider-aws'

new codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.get"></a>

```typescript
public get(index: number): CodestarnotificationsNotificationRuleTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodestarnotificationsNotificationRuleTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a>[]

---


### CodestarnotificationsNotificationRuleTargetOutputReference <a name="CodestarnotificationsNotificationRuleTargetOutputReference" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer"></a>

```typescript
import { codestarnotificationsNotificationRule } from '@cdktf/provider-aws'

new codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodestarnotificationsNotificationRuleTarget | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget">CodestarnotificationsNotificationRuleTarget</a> | cdktf.IResolvable

---



