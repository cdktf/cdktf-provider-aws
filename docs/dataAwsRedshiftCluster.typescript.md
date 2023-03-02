# `dataAwsRedshiftCluster` Submodule <a name="`dataAwsRedshiftCluster` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftCluster <a name="DataAwsRedshiftCluster" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster aws_redshift_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.Initializer"></a>

```typescript
import { dataAwsRedshiftCluster } from '@cdktf/provider-aws'

new dataAwsRedshiftCluster.DataAwsRedshiftCluster(scope: Construct, id: string, config: DataAwsRedshiftClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig">DataAwsRedshiftClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig">DataAwsRedshiftClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.isConstruct"></a>

```typescript
import { dataAwsRedshiftCluster } from '@cdktf/provider-aws'

dataAwsRedshiftCluster.DataAwsRedshiftCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.isTerraformElement"></a>

```typescript
import { dataAwsRedshiftCluster } from '@cdktf/provider-aws'

dataAwsRedshiftCluster.DataAwsRedshiftCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.isTerraformDataSource"></a>

```typescript
import { dataAwsRedshiftCluster } from '@cdktf/provider-aws'

dataAwsRedshiftCluster.DataAwsRedshiftCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.allowVersionUpgrade">allowVersionUpgrade</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.aquaConfigurationStatus">aquaConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.automatedSnapshotRetentionPeriod">automatedSnapshotRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.availabilityZoneRelocationEnabled">availabilityZoneRelocationEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterNodes">clusterNodes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList">DataAwsRedshiftClusterClusterNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterParameterGroupName">clusterParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterPublicKey">clusterPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterRevisionNumber">clusterRevisionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterSecurityGroups">clusterSecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterSubnetGroupName">clusterSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.defaultIamRoleArn">defaultIamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.elasticIp">elasticIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.enableLogging">enableLogging</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.encrypted">encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.iamRoles">iamRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.logDestinationType">logDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.logExports">logExports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.maintenanceTrackName">maintenanceTrackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.manualSnapshotRetentionPeriod">manualSnapshotRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.masterUsername">masterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.numberOfNodes">numberOfNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.publiclyAccessible">publiclyAccessible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allowVersionUpgrade`<sup>Required</sup> <a name="allowVersionUpgrade" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.allowVersionUpgrade"></a>

```typescript
public readonly allowVersionUpgrade: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `aquaConfigurationStatus`<sup>Required</sup> <a name="aquaConfigurationStatus" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.aquaConfigurationStatus"></a>

```typescript
public readonly aquaConfigurationStatus: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `automatedSnapshotRetentionPeriod`<sup>Required</sup> <a name="automatedSnapshotRetentionPeriod" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.automatedSnapshotRetentionPeriod"></a>

```typescript
public readonly automatedSnapshotRetentionPeriod: number;
```

- *Type:* number

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneRelocationEnabled`<sup>Required</sup> <a name="availabilityZoneRelocationEnabled" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.availabilityZoneRelocationEnabled"></a>

```typescript
public readonly availabilityZoneRelocationEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `clusterNodes`<sup>Required</sup> <a name="clusterNodes" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterNodes"></a>

```typescript
public readonly clusterNodes: DataAwsRedshiftClusterClusterNodesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList">DataAwsRedshiftClusterClusterNodesList</a>

---

##### `clusterParameterGroupName`<sup>Required</sup> <a name="clusterParameterGroupName" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterParameterGroupName"></a>

```typescript
public readonly clusterParameterGroupName: string;
```

- *Type:* string

---

##### `clusterPublicKey`<sup>Required</sup> <a name="clusterPublicKey" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterPublicKey"></a>

```typescript
public readonly clusterPublicKey: string;
```

- *Type:* string

---

##### `clusterRevisionNumber`<sup>Required</sup> <a name="clusterRevisionNumber" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterRevisionNumber"></a>

```typescript
public readonly clusterRevisionNumber: string;
```

- *Type:* string

---

##### `clusterSecurityGroups`<sup>Required</sup> <a name="clusterSecurityGroups" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterSecurityGroups"></a>

```typescript
public readonly clusterSecurityGroups: string[];
```

- *Type:* string[]

---

##### `clusterSubnetGroupName`<sup>Required</sup> <a name="clusterSubnetGroupName" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterSubnetGroupName"></a>

```typescript
public readonly clusterSubnetGroupName: string;
```

- *Type:* string

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `defaultIamRoleArn`<sup>Required</sup> <a name="defaultIamRoleArn" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.defaultIamRoleArn"></a>

```typescript
public readonly defaultIamRoleArn: string;
```

- *Type:* string

---

##### `elasticIp`<sup>Required</sup> <a name="elasticIp" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.elasticIp"></a>

```typescript
public readonly elasticIp: string;
```

- *Type:* string

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.enableLogging"></a>

```typescript
public readonly enableLogging: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.encrypted"></a>

```typescript
public readonly encrypted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="enhancedVpcRouting" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.enhancedVpcRouting"></a>

```typescript
public readonly enhancedVpcRouting: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `iamRoles`<sup>Required</sup> <a name="iamRoles" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.iamRoles"></a>

```typescript
public readonly iamRoles: string[];
```

- *Type:* string[]

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `logDestinationType`<sup>Required</sup> <a name="logDestinationType" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.logDestinationType"></a>

```typescript
public readonly logDestinationType: string;
```

- *Type:* string

---

##### `logExports`<sup>Required</sup> <a name="logExports" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.logExports"></a>

```typescript
public readonly logExports: string[];
```

- *Type:* string[]

---

##### `maintenanceTrackName`<sup>Required</sup> <a name="maintenanceTrackName" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.maintenanceTrackName"></a>

```typescript
public readonly maintenanceTrackName: string;
```

- *Type:* string

---

##### `manualSnapshotRetentionPeriod`<sup>Required</sup> <a name="manualSnapshotRetentionPeriod" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.manualSnapshotRetentionPeriod"></a>

```typescript
public readonly manualSnapshotRetentionPeriod: number;
```

- *Type:* number

---

##### `masterUsername`<sup>Required</sup> <a name="masterUsername" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.masterUsername"></a>

```typescript
public readonly masterUsername: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `numberOfNodes`<sup>Required</sup> <a name="numberOfNodes" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.numberOfNodes"></a>

```typescript
public readonly numberOfNodes: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftClusterClusterNodes <a name="DataAwsRedshiftClusterClusterNodes" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodes.Initializer"></a>

```typescript
import { dataAwsRedshiftCluster } from '@cdktf/provider-aws'

const dataAwsRedshiftClusterClusterNodes: dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodes = { ... }
```


### DataAwsRedshiftClusterConfig <a name="DataAwsRedshiftClusterConfig" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.Initializer"></a>

```typescript
import { dataAwsRedshiftCluster } from '@cdktf/provider-aws'

const dataAwsRedshiftClusterConfig: dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster#cluster_identifier DataAwsRedshiftCluster#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster#id DataAwsRedshiftCluster#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster#tags DataAwsRedshiftCluster#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster#cluster_identifier DataAwsRedshiftCluster#cluster_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster#id DataAwsRedshiftCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/redshift_cluster#tags DataAwsRedshiftCluster#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsRedshiftClusterClusterNodesList <a name="DataAwsRedshiftClusterClusterNodesList" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.Initializer"></a>

```typescript
import { dataAwsRedshiftCluster } from '@cdktf/provider-aws'

new dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.get"></a>

```typescript
public get(index: number): DataAwsRedshiftClusterClusterNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsRedshiftClusterClusterNodesOutputReference <a name="DataAwsRedshiftClusterClusterNodesOutputReference" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.Initializer"></a>

```typescript
import { dataAwsRedshiftCluster } from '@cdktf/provider-aws'

new dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.property.nodeRole">nodeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.property.publicIpAddress">publicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodes">DataAwsRedshiftClusterClusterNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeRole`<sup>Required</sup> <a name="nodeRole" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.property.nodeRole"></a>

```typescript
public readonly nodeRole: string;
```

- *Type:* string

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.property.publicIpAddress"></a>

```typescript
public readonly publicIpAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsRedshiftClusterClusterNodes;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftCluster.DataAwsRedshiftClusterClusterNodes">DataAwsRedshiftClusterClusterNodes</a>

---



