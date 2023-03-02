# `backupReportPlan` Submodule <a name="`backupReportPlan` Submodule" id="@cdktf/provider-aws.backupReportPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupReportPlan <a name="BackupReportPlan" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan aws_backup_report_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer"></a>

```typescript
import { backupReportPlan } from '@cdktf/provider-aws'

new backupReportPlan.BackupReportPlan(scope: Construct, id: string, config: BackupReportPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig">BackupReportPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig">BackupReportPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportDeliveryChannel">putReportDeliveryChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportSetting">putReportSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putReportDeliveryChannel` <a name="putReportDeliveryChannel" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportDeliveryChannel"></a>

```typescript
public putReportDeliveryChannel(value: BackupReportPlanReportDeliveryChannel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportDeliveryChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---

##### `putReportSetting` <a name="putReportSetting" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportSetting"></a>

```typescript
public putReportSetting(value: BackupReportPlanReportSetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.putReportSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isConstruct"></a>

```typescript
import { backupReportPlan } from '@cdktf/provider-aws'

backupReportPlan.BackupReportPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformElement"></a>

```typescript
import { backupReportPlan } from '@cdktf/provider-aws'

backupReportPlan.BackupReportPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformResource"></a>

```typescript
import { backupReportPlan } from '@cdktf/provider-aws'

backupReportPlan.BackupReportPlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.deploymentStatus">deploymentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportDeliveryChannel">reportDeliveryChannel</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference">BackupReportPlanReportDeliveryChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportSetting">reportSetting</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference">BackupReportPlanReportSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportDeliveryChannelInput">reportDeliveryChannelInput</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportSettingInput">reportSettingInput</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `deploymentStatus`<sup>Required</sup> <a name="deploymentStatus" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.deploymentStatus"></a>

```typescript
public readonly deploymentStatus: string;
```

- *Type:* string

---

##### `reportDeliveryChannel`<sup>Required</sup> <a name="reportDeliveryChannel" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportDeliveryChannel"></a>

```typescript
public readonly reportDeliveryChannel: BackupReportPlanReportDeliveryChannelOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference">BackupReportPlanReportDeliveryChannelOutputReference</a>

---

##### `reportSetting`<sup>Required</sup> <a name="reportSetting" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportSetting"></a>

```typescript
public readonly reportSetting: BackupReportPlanReportSettingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference">BackupReportPlanReportSettingOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `reportDeliveryChannelInput`<sup>Optional</sup> <a name="reportDeliveryChannelInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportDeliveryChannelInput"></a>

```typescript
public readonly reportDeliveryChannelInput: BackupReportPlanReportDeliveryChannel;
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---

##### `reportSettingInput`<sup>Optional</sup> <a name="reportSettingInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.reportSettingInput"></a>

```typescript
public readonly reportSettingInput: BackupReportPlanReportSetting;
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupReportPlanConfig <a name="BackupReportPlanConfig" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.Initializer"></a>

```typescript
import { backupReportPlan } from '@cdktf/provider-aws'

const backupReportPlanConfig: backupReportPlan.BackupReportPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#name BackupReportPlan#name}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.reportDeliveryChannel">reportDeliveryChannel</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | report_delivery_channel block. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.reportSetting">reportSetting</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | report_setting block. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#description BackupReportPlan#description}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#id BackupReportPlan#id}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags BackupReportPlan#tags}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags_all BackupReportPlan#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#name BackupReportPlan#name}.

---

##### `reportDeliveryChannel`<sup>Required</sup> <a name="reportDeliveryChannel" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.reportDeliveryChannel"></a>

```typescript
public readonly reportDeliveryChannel: BackupReportPlanReportDeliveryChannel;
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

report_delivery_channel block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_delivery_channel BackupReportPlan#report_delivery_channel}

---

##### `reportSetting`<sup>Required</sup> <a name="reportSetting" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.reportSetting"></a>

```typescript
public readonly reportSetting: BackupReportPlanReportSetting;
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

report_setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_setting BackupReportPlan#report_setting}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#description BackupReportPlan#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#id BackupReportPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags BackupReportPlan#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#tags_all BackupReportPlan#tags_all}.

---

### BackupReportPlanReportDeliveryChannel <a name="BackupReportPlanReportDeliveryChannel" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.Initializer"></a>

```typescript
import { backupReportPlan } from '@cdktf/provider-aws'

const backupReportPlanReportDeliveryChannel: backupReportPlan.BackupReportPlanReportDeliveryChannel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#s3_bucket_name BackupReportPlan#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.formats">formats</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#formats BackupReportPlan#formats}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#s3_key_prefix BackupReportPlan#s3_key_prefix}. |

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#s3_bucket_name BackupReportPlan#s3_bucket_name}.

---

##### `formats`<sup>Optional</sup> <a name="formats" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.formats"></a>

```typescript
public readonly formats: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#formats BackupReportPlan#formats}.

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#s3_key_prefix BackupReportPlan#s3_key_prefix}.

---

### BackupReportPlanReportSetting <a name="BackupReportPlanReportSetting" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.Initializer"></a>

```typescript
import { backupReportPlan } from '@cdktf/provider-aws'

const backupReportPlanReportSetting: backupReportPlan.BackupReportPlanReportSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.reportTemplate">reportTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_template BackupReportPlan#report_template}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.frameworkArns">frameworkArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#framework_arns BackupReportPlan#framework_arns}. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.numberOfFrameworks">numberOfFrameworks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#number_of_frameworks BackupReportPlan#number_of_frameworks}. |

---

##### `reportTemplate`<sup>Required</sup> <a name="reportTemplate" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.reportTemplate"></a>

```typescript
public readonly reportTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#report_template BackupReportPlan#report_template}.

---

##### `frameworkArns`<sup>Optional</sup> <a name="frameworkArns" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.frameworkArns"></a>

```typescript
public readonly frameworkArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#framework_arns BackupReportPlan#framework_arns}.

---

##### `numberOfFrameworks`<sup>Optional</sup> <a name="numberOfFrameworks" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting.property.numberOfFrameworks"></a>

```typescript
public readonly numberOfFrameworks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_report_plan#number_of_frameworks BackupReportPlan#number_of_frameworks}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupReportPlanReportDeliveryChannelOutputReference <a name="BackupReportPlanReportDeliveryChannelOutputReference" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer"></a>

```typescript
import { backupReportPlan } from '@cdktf/provider-aws'

new backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetFormats">resetFormats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFormats` <a name="resetFormats" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetFormats"></a>

```typescript
public resetFormats(): void
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetS3KeyPrefix"></a>

```typescript
public resetS3KeyPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formatsInput">formatsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formats">formats</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formatsInput`<sup>Optional</sup> <a name="formatsInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formatsInput"></a>

```typescript
public readonly formatsInput: string[];
```

- *Type:* string[]

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketNameInput"></a>

```typescript
public readonly s3BucketNameInput: string;
```

- *Type:* string

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefixInput"></a>

```typescript
public readonly s3KeyPrefixInput: string;
```

- *Type:* string

---

##### `formats`<sup>Required</sup> <a name="formats" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formats"></a>

```typescript
public readonly formats: string[];
```

- *Type:* string[]

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupReportPlanReportDeliveryChannel;
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---


### BackupReportPlanReportSettingOutputReference <a name="BackupReportPlanReportSettingOutputReference" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer"></a>

```typescript
import { backupReportPlan } from '@cdktf/provider-aws'

new backupReportPlan.BackupReportPlanReportSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetFrameworkArns">resetFrameworkArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetNumberOfFrameworks">resetNumberOfFrameworks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrameworkArns` <a name="resetFrameworkArns" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetFrameworkArns"></a>

```typescript
public resetFrameworkArns(): void
```

##### `resetNumberOfFrameworks` <a name="resetNumberOfFrameworks" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetNumberOfFrameworks"></a>

```typescript
public resetNumberOfFrameworks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArnsInput">frameworkArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.numberOfFrameworksInput">numberOfFrameworksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplateInput">reportTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArns">frameworkArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.numberOfFrameworks">numberOfFrameworks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplate">reportTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frameworkArnsInput`<sup>Optional</sup> <a name="frameworkArnsInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArnsInput"></a>

```typescript
public readonly frameworkArnsInput: string[];
```

- *Type:* string[]

---

##### `numberOfFrameworksInput`<sup>Optional</sup> <a name="numberOfFrameworksInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.numberOfFrameworksInput"></a>

```typescript
public readonly numberOfFrameworksInput: number;
```

- *Type:* number

---

##### `reportTemplateInput`<sup>Optional</sup> <a name="reportTemplateInput" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplateInput"></a>

```typescript
public readonly reportTemplateInput: string;
```

- *Type:* string

---

##### `frameworkArns`<sup>Required</sup> <a name="frameworkArns" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArns"></a>

```typescript
public readonly frameworkArns: string[];
```

- *Type:* string[]

---

##### `numberOfFrameworks`<sup>Required</sup> <a name="numberOfFrameworks" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.numberOfFrameworks"></a>

```typescript
public readonly numberOfFrameworks: number;
```

- *Type:* number

---

##### `reportTemplate`<sup>Required</sup> <a name="reportTemplate" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplate"></a>

```typescript
public readonly reportTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupReportPlanReportSetting;
```

- *Type:* <a href="#@cdktf/provider-aws.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---



