# `cloudhsmV2Cluster` Submodule <a name="`cloudhsmV2Cluster` Submodule" id="@cdktf/provider-aws.cloudhsmV2Cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudhsmV2Cluster <a name="CloudhsmV2Cluster" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster aws_cloudhsm_v2_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer"></a>

```typescript
import { cloudhsmV2Cluster } from '@cdktf/provider-aws'

new cloudhsmV2Cluster.CloudhsmV2Cluster(scope: Construct, id: string, config: CloudhsmV2ClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig">CloudhsmV2ClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig">CloudhsmV2ClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetSourceBackupIdentifier">resetSourceBackupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudhsmV2ClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSourceBackupIdentifier` <a name="resetSourceBackupIdentifier" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetSourceBackupIdentifier"></a>

```typescript
public resetSourceBackupIdentifier(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isConstruct"></a>

```typescript
import { cloudhsmV2Cluster } from '@cdktf/provider-aws'

cloudhsmV2Cluster.CloudhsmV2Cluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isTerraformElement"></a>

```typescript
import { cloudhsmV2Cluster } from '@cdktf/provider-aws'

cloudhsmV2Cluster.CloudhsmV2Cluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isTerraformResource"></a>

```typescript
import { cloudhsmV2Cluster } from '@cdktf/provider-aws'

cloudhsmV2Cluster.CloudhsmV2Cluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.clusterCertificates">clusterCertificates</a></code> | <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList">CloudhsmV2ClusterClusterCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.clusterState">clusterState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference">CloudhsmV2ClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.hsmTypeInput">hsmTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.sourceBackupIdentifierInput">sourceBackupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.hsmType">hsmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.sourceBackupIdentifier">sourceBackupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterCertificates`<sup>Required</sup> <a name="clusterCertificates" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.clusterCertificates"></a>

```typescript
public readonly clusterCertificates: CloudhsmV2ClusterClusterCertificatesList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList">CloudhsmV2ClusterClusterCertificatesList</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `clusterState`<sup>Required</sup> <a name="clusterState" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.clusterState"></a>

```typescript
public readonly clusterState: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.timeouts"></a>

```typescript
public readonly timeouts: CloudhsmV2ClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference">CloudhsmV2ClusterTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `hsmTypeInput`<sup>Optional</sup> <a name="hsmTypeInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.hsmTypeInput"></a>

```typescript
public readonly hsmTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sourceBackupIdentifierInput`<sup>Optional</sup> <a name="sourceBackupIdentifierInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.sourceBackupIdentifierInput"></a>

```typescript
public readonly sourceBackupIdentifierInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: CloudhsmV2ClusterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a> | cdktf.IResolvable

---

##### `hsmType`<sup>Required</sup> <a name="hsmType" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.hsmType"></a>

```typescript
public readonly hsmType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sourceBackupIdentifier`<sup>Required</sup> <a name="sourceBackupIdentifier" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.sourceBackupIdentifier"></a>

```typescript
public readonly sourceBackupIdentifier: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudhsmV2ClusterClusterCertificates <a name="CloudhsmV2ClusterClusterCertificates" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificates.Initializer"></a>

```typescript
import { cloudhsmV2Cluster } from '@cdktf/provider-aws'

const cloudhsmV2ClusterClusterCertificates: cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificates = { ... }
```


### CloudhsmV2ClusterConfig <a name="CloudhsmV2ClusterConfig" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.Initializer"></a>

```typescript
import { cloudhsmV2Cluster } from '@cdktf/provider-aws'

const cloudhsmV2ClusterConfig: cloudhsmV2Cluster.CloudhsmV2ClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.hsmType">hsmType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#hsm_type CloudhsmV2Cluster#hsm_type}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#subnet_ids CloudhsmV2Cluster#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#id CloudhsmV2Cluster#id}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.sourceBackupIdentifier">sourceBackupIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#source_backup_identifier CloudhsmV2Cluster#source_backup_identifier}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#tags CloudhsmV2Cluster#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#tags_all CloudhsmV2Cluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hsmType`<sup>Required</sup> <a name="hsmType" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.hsmType"></a>

```typescript
public readonly hsmType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#hsm_type CloudhsmV2Cluster#hsm_type}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#subnet_ids CloudhsmV2Cluster#subnet_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#id CloudhsmV2Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceBackupIdentifier`<sup>Optional</sup> <a name="sourceBackupIdentifier" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.sourceBackupIdentifier"></a>

```typescript
public readonly sourceBackupIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#source_backup_identifier CloudhsmV2Cluster#source_backup_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#tags CloudhsmV2Cluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#tags_all CloudhsmV2Cluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudhsmV2ClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#timeouts CloudhsmV2Cluster#timeouts}

---

### CloudhsmV2ClusterTimeouts <a name="CloudhsmV2ClusterTimeouts" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts.Initializer"></a>

```typescript
import { cloudhsmV2Cluster } from '@cdktf/provider-aws'

const cloudhsmV2ClusterTimeouts: cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#create CloudhsmV2Cluster#create}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#delete CloudhsmV2Cluster#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#update CloudhsmV2Cluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#create CloudhsmV2Cluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#delete CloudhsmV2Cluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster#update CloudhsmV2Cluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudhsmV2ClusterClusterCertificatesList <a name="CloudhsmV2ClusterClusterCertificatesList" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.Initializer"></a>

```typescript
import { cloudhsmV2Cluster } from '@cdktf/provider-aws'

new cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.get"></a>

```typescript
public get(index: number): CloudhsmV2ClusterClusterCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudhsmV2ClusterClusterCertificatesOutputReference <a name="CloudhsmV2ClusterClusterCertificatesOutputReference" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer"></a>

```typescript
import { cloudhsmV2Cluster } from '@cdktf/provider-aws'

new cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.awsHardwareCertificate">awsHardwareCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCertificate">clusterCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCsr">clusterCsr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.hsmCertificate">hsmCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.manufacturerHardwareCertificate">manufacturerHardwareCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificates">CloudhsmV2ClusterClusterCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsHardwareCertificate`<sup>Required</sup> <a name="awsHardwareCertificate" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.awsHardwareCertificate"></a>

```typescript
public readonly awsHardwareCertificate: string;
```

- *Type:* string

---

##### `clusterCertificate`<sup>Required</sup> <a name="clusterCertificate" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCertificate"></a>

```typescript
public readonly clusterCertificate: string;
```

- *Type:* string

---

##### `clusterCsr`<sup>Required</sup> <a name="clusterCsr" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCsr"></a>

```typescript
public readonly clusterCsr: string;
```

- *Type:* string

---

##### `hsmCertificate`<sup>Required</sup> <a name="hsmCertificate" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.hsmCertificate"></a>

```typescript
public readonly hsmCertificate: string;
```

- *Type:* string

---

##### `manufacturerHardwareCertificate`<sup>Required</sup> <a name="manufacturerHardwareCertificate" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.manufacturerHardwareCertificate"></a>

```typescript
public readonly manufacturerHardwareCertificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudhsmV2ClusterClusterCertificates;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificates">CloudhsmV2ClusterClusterCertificates</a>

---


### CloudhsmV2ClusterTimeoutsOutputReference <a name="CloudhsmV2ClusterTimeoutsOutputReference" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudhsmV2Cluster } from '@cdktf/provider-aws'

new cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudhsmV2ClusterTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a> | cdktf.IResolvable

---



