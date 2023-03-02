# `dataAwsBackupReportPlan` Submodule <a name="`dataAwsBackupReportPlan` Submodule" id="@cdktf/provider-aws.dataAwsBackupReportPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBackupReportPlan <a name="DataAwsBackupReportPlan" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan aws_backup_report_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer"></a>

```typescript
import { dataAwsBackupReportPlan } from '@cdktf/provider-aws'

new dataAwsBackupReportPlan.DataAwsBackupReportPlan(scope: Construct, id: string, config: DataAwsBackupReportPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig">DataAwsBackupReportPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig">DataAwsBackupReportPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isConstruct"></a>

```typescript
import { dataAwsBackupReportPlan } from '@cdktf/provider-aws'

dataAwsBackupReportPlan.DataAwsBackupReportPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformElement"></a>

```typescript
import { dataAwsBackupReportPlan } from '@cdktf/provider-aws'

dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformDataSource"></a>

```typescript
import { dataAwsBackupReportPlan } from '@cdktf/provider-aws'

dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.deploymentStatus">deploymentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.reportDeliveryChannel">reportDeliveryChannel</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList">DataAwsBackupReportPlanReportDeliveryChannelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.reportSetting">reportSetting</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList">DataAwsBackupReportPlanReportSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `deploymentStatus`<sup>Required</sup> <a name="deploymentStatus" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.deploymentStatus"></a>

```typescript
public readonly deploymentStatus: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `reportDeliveryChannel`<sup>Required</sup> <a name="reportDeliveryChannel" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.reportDeliveryChannel"></a>

```typescript
public readonly reportDeliveryChannel: DataAwsBackupReportPlanReportDeliveryChannelList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList">DataAwsBackupReportPlanReportDeliveryChannelList</a>

---

##### `reportSetting`<sup>Required</sup> <a name="reportSetting" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.reportSetting"></a>

```typescript
public readonly reportSetting: DataAwsBackupReportPlanReportSettingList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList">DataAwsBackupReportPlanReportSettingList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBackupReportPlanConfig <a name="DataAwsBackupReportPlanConfig" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.Initializer"></a>

```typescript
import { dataAwsBackupReportPlan } from '@cdktf/provider-aws'

const dataAwsBackupReportPlanConfig: dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#name DataAwsBackupReportPlan#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#id DataAwsBackupReportPlan#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#tags DataAwsBackupReportPlan#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#name DataAwsBackupReportPlan#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#id DataAwsBackupReportPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_report_plan#tags DataAwsBackupReportPlan#tags}.

---

### DataAwsBackupReportPlanReportDeliveryChannel <a name="DataAwsBackupReportPlanReportDeliveryChannel" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannel.Initializer"></a>

```typescript
import { dataAwsBackupReportPlan } from '@cdktf/provider-aws'

const dataAwsBackupReportPlanReportDeliveryChannel: dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannel = { ... }
```


### DataAwsBackupReportPlanReportSetting <a name="DataAwsBackupReportPlanReportSetting" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSetting.Initializer"></a>

```typescript
import { dataAwsBackupReportPlan } from '@cdktf/provider-aws'

const dataAwsBackupReportPlanReportSetting: dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSetting = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsBackupReportPlanReportDeliveryChannelList <a name="DataAwsBackupReportPlanReportDeliveryChannelList" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer"></a>

```typescript
import { dataAwsBackupReportPlan } from '@cdktf/provider-aws'

new dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.get"></a>

```typescript
public get(index: number): DataAwsBackupReportPlanReportDeliveryChannelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBackupReportPlanReportDeliveryChannelOutputReference <a name="DataAwsBackupReportPlanReportDeliveryChannelOutputReference" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer"></a>

```typescript
import { dataAwsBackupReportPlan } from '@cdktf/provider-aws'

new dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.formats">formats</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannel">DataAwsBackupReportPlanReportDeliveryChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formats`<sup>Required</sup> <a name="formats" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.formats"></a>

```typescript
public readonly formats: string[];
```

- *Type:* string[]

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBackupReportPlanReportDeliveryChannel;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportDeliveryChannel">DataAwsBackupReportPlanReportDeliveryChannel</a>

---


### DataAwsBackupReportPlanReportSettingList <a name="DataAwsBackupReportPlanReportSettingList" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer"></a>

```typescript
import { dataAwsBackupReportPlan } from '@cdktf/provider-aws'

new dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.get"></a>

```typescript
public get(index: number): DataAwsBackupReportPlanReportSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsBackupReportPlanReportSettingOutputReference <a name="DataAwsBackupReportPlanReportSettingOutputReference" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer"></a>

```typescript
import { dataAwsBackupReportPlan } from '@cdktf/provider-aws'

new dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.frameworkArns">frameworkArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.numberOfFrameworks">numberOfFrameworks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.reportTemplate">reportTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSetting">DataAwsBackupReportPlanReportSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frameworkArns`<sup>Required</sup> <a name="frameworkArns" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.frameworkArns"></a>

```typescript
public readonly frameworkArns: string[];
```

- *Type:* string[]

---

##### `numberOfFrameworks`<sup>Required</sup> <a name="numberOfFrameworks" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.numberOfFrameworks"></a>

```typescript
public readonly numberOfFrameworks: number;
```

- *Type:* number

---

##### `reportTemplate`<sup>Required</sup> <a name="reportTemplate" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.reportTemplate"></a>

```typescript
public readonly reportTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsBackupReportPlanReportSetting;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBackupReportPlan.DataAwsBackupReportPlanReportSetting">DataAwsBackupReportPlanReportSetting</a>

---



