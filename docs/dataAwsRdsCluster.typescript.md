# `dataAwsRdsCluster` Submodule <a name="`dataAwsRdsCluster` Submodule" id="@cdktf/provider-aws.dataAwsRdsCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsCluster <a name="DataAwsRdsCluster" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/rds_cluster aws_rds_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.Initializer"></a>

```typescript
import { dataAwsRdsCluster } from '@cdktf/provider-aws'

new dataAwsRdsCluster.DataAwsRdsCluster(scope: Construct, id: string, config: DataAwsRdsClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig">DataAwsRdsClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig">DataAwsRdsClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsRdsCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.isConstruct"></a>

```typescript
import { dataAwsRdsCluster } from '@cdktf/provider-aws'

dataAwsRdsCluster.DataAwsRdsCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.isTerraformElement"></a>

```typescript
import { dataAwsRdsCluster } from '@cdktf/provider-aws'

dataAwsRdsCluster.DataAwsRdsCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.isTerraformDataSource"></a>

```typescript
import { dataAwsRdsCluster } from '@cdktf/provider-aws'

dataAwsRdsCluster.DataAwsRdsCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.generateConfigForImport"></a>

```typescript
import { dataAwsRdsCluster } from '@cdktf/provider-aws'

dataAwsRdsCluster.DataAwsRdsCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsRdsCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRdsCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRdsCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/rds_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRdsCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.backtrackWindow">backtrackWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.backupRetentionPeriod">backupRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.clusterMembers">clusterMembers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.clusterResourceId">clusterResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.clusterScalabilityType">clusterScalabilityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.databaseInsightsMode">databaseInsightsMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.dbClusterParameterGroupName">dbClusterParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.dbSubnetGroupName">dbSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.enabledCloudwatchLogsExports">enabledCloudwatchLogsExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.engineMode">engineMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.finalSnapshotIdentifier">finalSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.iamDatabaseAuthenticationEnabled">iamDatabaseAuthenticationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.masterUsername">masterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.masterUserSecret">masterUserSecret</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList">DataAwsRdsClusterMasterUserSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.monitoringInterval">monitoringInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.monitoringRoleArn">monitoringRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.preferredBackupWindow">preferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.readerEndpoint">readerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.replicationSourceIdentifier">replicationSourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.storageEncrypted">storageEncrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `backtrackWindow`<sup>Required</sup> <a name="backtrackWindow" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.backtrackWindow"></a>

```typescript
public readonly backtrackWindow: number;
```

- *Type:* number

---

##### `backupRetentionPeriod`<sup>Required</sup> <a name="backupRetentionPeriod" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.backupRetentionPeriod"></a>

```typescript
public readonly backupRetentionPeriod: number;
```

- *Type:* number

---

##### `clusterMembers`<sup>Required</sup> <a name="clusterMembers" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.clusterMembers"></a>

```typescript
public readonly clusterMembers: string[];
```

- *Type:* string[]

---

##### `clusterResourceId`<sup>Required</sup> <a name="clusterResourceId" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.clusterResourceId"></a>

```typescript
public readonly clusterResourceId: string;
```

- *Type:* string

---

##### `clusterScalabilityType`<sup>Required</sup> <a name="clusterScalabilityType" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.clusterScalabilityType"></a>

```typescript
public readonly clusterScalabilityType: string;
```

- *Type:* string

---

##### `databaseInsightsMode`<sup>Required</sup> <a name="databaseInsightsMode" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.databaseInsightsMode"></a>

```typescript
public readonly databaseInsightsMode: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `dbClusterParameterGroupName`<sup>Required</sup> <a name="dbClusterParameterGroupName" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.dbClusterParameterGroupName"></a>

```typescript
public readonly dbClusterParameterGroupName: string;
```

- *Type:* string

---

##### `dbSubnetGroupName`<sup>Required</sup> <a name="dbSubnetGroupName" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.dbSubnetGroupName"></a>

```typescript
public readonly dbSubnetGroupName: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `enabledCloudwatchLogsExports`<sup>Required</sup> <a name="enabledCloudwatchLogsExports" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.enabledCloudwatchLogsExports"></a>

```typescript
public readonly enabledCloudwatchLogsExports: string[];
```

- *Type:* string[]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineMode`<sup>Required</sup> <a name="engineMode" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.engineMode"></a>

```typescript
public readonly engineMode: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `finalSnapshotIdentifier`<sup>Required</sup> <a name="finalSnapshotIdentifier" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.finalSnapshotIdentifier"></a>

```typescript
public readonly finalSnapshotIdentifier: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `iamDatabaseAuthenticationEnabled`<sup>Required</sup> <a name="iamDatabaseAuthenticationEnabled" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.iamDatabaseAuthenticationEnabled"></a>

```typescript
public readonly iamDatabaseAuthenticationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.masterUsername"></a>

```typescript
public readonly masterUsername: string;
```

- *Type:* string

---

##### `masterUserSecret`<sup>Required</sup> <a name="masterUserSecret" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.masterUserSecret"></a>

```typescript
public readonly masterUserSecret: DataAwsRdsClusterMasterUserSecretList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList">DataAwsRdsClusterMasterUserSecretList</a>

---

##### `monitoringInterval`<sup>Required</sup> <a name="monitoringInterval" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.monitoringInterval"></a>

```typescript
public readonly monitoringInterval: number;
```

- *Type:* number

---

##### `monitoringRoleArn`<sup>Required</sup> <a name="monitoringRoleArn" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.monitoringRoleArn"></a>

```typescript
public readonly monitoringRoleArn: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `preferredBackupWindow`<sup>Required</sup> <a name="preferredBackupWindow" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.preferredBackupWindow"></a>

```typescript
public readonly preferredBackupWindow: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `readerEndpoint`<sup>Required</sup> <a name="readerEndpoint" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.readerEndpoint"></a>

```typescript
public readonly readerEndpoint: string;
```

- *Type:* string

---

##### `replicationSourceIdentifier`<sup>Required</sup> <a name="replicationSourceIdentifier" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.replicationSourceIdentifier"></a>

```typescript
public readonly replicationSourceIdentifier: string;
```

- *Type:* string

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsClusterConfig <a name="DataAwsRdsClusterConfig" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.Initializer"></a>

```typescript
import { dataAwsRdsCluster } from '@cdktf/provider-aws'

const dataAwsRdsClusterConfig: dataAwsRdsCluster.DataAwsRdsClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/rds_cluster#cluster_identifier DataAwsRdsCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/rds_cluster#id DataAwsRdsCluster#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/rds_cluster#tags DataAwsRdsCluster#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/rds_cluster#cluster_identifier DataAwsRdsCluster#cluster_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/rds_cluster#id DataAwsRdsCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/rds_cluster#region DataAwsRdsCluster#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/rds_cluster#tags DataAwsRdsCluster#tags}.

---

### DataAwsRdsClusterMasterUserSecret <a name="DataAwsRdsClusterMasterUserSecret" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecret.Initializer"></a>

```typescript
import { dataAwsRdsCluster } from '@cdktf/provider-aws'

const dataAwsRdsClusterMasterUserSecret: dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecret = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRdsClusterMasterUserSecretList <a name="DataAwsRdsClusterMasterUserSecretList" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.Initializer"></a>

```typescript
import { dataAwsRdsCluster } from '@cdktf/provider-aws'

new dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.get"></a>

```typescript
public get(index: number): DataAwsRdsClusterMasterUserSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsRdsClusterMasterUserSecretOutputReference <a name="DataAwsRdsClusterMasterUserSecretOutputReference" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.Initializer"></a>

```typescript
import { dataAwsRdsCluster } from '@cdktf/provider-aws'

new dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.property.secretStatus">secretStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecret">DataAwsRdsClusterMasterUserSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `secretStatus`<sup>Required</sup> <a name="secretStatus" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.property.secretStatus"></a>

```typescript
public readonly secretStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsRdsClusterMasterUserSecret;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRdsCluster.DataAwsRdsClusterMasterUserSecret">DataAwsRdsClusterMasterUserSecret</a>

---



