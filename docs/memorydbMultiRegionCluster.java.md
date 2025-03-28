# `memorydbMultiRegionCluster` Submodule <a name="`memorydbMultiRegionCluster` Submodule" id="@cdktf/provider-aws.memorydbMultiRegionCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MemorydbMultiRegionCluster <a name="MemorydbMultiRegionCluster" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster aws_memorydb_multi_region_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.memorydb_multi_region_cluster.MemorydbMultiRegionCluster;

MemorydbMultiRegionCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .multiRegionClusterNameSuffix(java.lang.String)
    .nodeType(java.lang.String)
//  .description(java.lang.String)
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .multiRegionParameterGroupName(java.lang.String)
//  .numShards(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MemorydbMultiRegionClusterTimeouts)
//  .tlsEnabled(java.lang.Boolean)
//  .tlsEnabled(IResolvable)
//  .updateStrategy(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.multiRegionClusterNameSuffix">multiRegionClusterNameSuffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#multi_region_cluster_name_suffix MemorydbMultiRegionCluster#multi_region_cluster_name_suffix}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#node_type MemorydbMultiRegionCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#description MemorydbMultiRegionCluster#description}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#engine MemorydbMultiRegionCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#engine_version MemorydbMultiRegionCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.multiRegionParameterGroupName">multiRegionParameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#multi_region_parameter_group_name MemorydbMultiRegionCluster#multi_region_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.numShards">numShards</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#num_shards MemorydbMultiRegionCluster#num_shards}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#tags MemorydbMultiRegionCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.tlsEnabled">tlsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#tls_enabled MemorydbMultiRegionCluster#tls_enabled}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.updateStrategy">updateStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#update_strategy MemorydbMultiRegionCluster#update_strategy}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `multiRegionClusterNameSuffix`<sup>Required</sup> <a name="multiRegionClusterNameSuffix" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.multiRegionClusterNameSuffix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#multi_region_cluster_name_suffix MemorydbMultiRegionCluster#multi_region_cluster_name_suffix}.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.nodeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#node_type MemorydbMultiRegionCluster#node_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#description MemorydbMultiRegionCluster#description}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#engine MemorydbMultiRegionCluster#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#engine_version MemorydbMultiRegionCluster#engine_version}.

---

##### `multiRegionParameterGroupName`<sup>Optional</sup> <a name="multiRegionParameterGroupName" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.multiRegionParameterGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#multi_region_parameter_group_name MemorydbMultiRegionCluster#multi_region_parameter_group_name}.

---

##### `numShards`<sup>Optional</sup> <a name="numShards" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.numShards"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#num_shards MemorydbMultiRegionCluster#num_shards}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#tags MemorydbMultiRegionCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#timeouts MemorydbMultiRegionCluster#timeouts}

---

##### `tlsEnabled`<sup>Optional</sup> <a name="tlsEnabled" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.tlsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#tls_enabled MemorydbMultiRegionCluster#tls_enabled}.

---

##### `updateStrategy`<sup>Optional</sup> <a name="updateStrategy" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.Initializer.parameter.updateStrategy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#update_strategy MemorydbMultiRegionCluster#update_strategy}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngine">resetEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngineVersion">resetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetMultiRegionParameterGroupName">resetMultiRegionParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetNumShards">resetNumShards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTlsEnabled">resetTlsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetUpdateStrategy">resetUpdateStrategy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.putTimeouts"></a>

```java
public void putTimeouts(MemorydbMultiRegionClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEngine` <a name="resetEngine" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngine"></a>

```java
public void resetEngine()
```

##### `resetEngineVersion` <a name="resetEngineVersion" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetEngineVersion"></a>

```java
public void resetEngineVersion()
```

##### `resetMultiRegionParameterGroupName` <a name="resetMultiRegionParameterGroupName" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetMultiRegionParameterGroupName"></a>

```java
public void resetMultiRegionParameterGroupName()
```

##### `resetNumShards` <a name="resetNumShards" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetNumShards"></a>

```java
public void resetNumShards()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTlsEnabled` <a name="resetTlsEnabled" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetTlsEnabled"></a>

```java
public void resetTlsEnabled()
```

##### `resetUpdateStrategy` <a name="resetUpdateStrategy" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.resetUpdateStrategy"></a>

```java
public void resetUpdateStrategy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MemorydbMultiRegionCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.memorydb_multi_region_cluster.MemorydbMultiRegionCluster;

MemorydbMultiRegionCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.memorydb_multi_region_cluster.MemorydbMultiRegionCluster;

MemorydbMultiRegionCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.memorydb_multi_region_cluster.MemorydbMultiRegionCluster;

MemorydbMultiRegionCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.memorydb_multi_region_cluster.MemorydbMultiRegionCluster;

MemorydbMultiRegionCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MemorydbMultiRegionCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MemorydbMultiRegionCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MemorydbMultiRegionCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MemorydbMultiRegionCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MemorydbMultiRegionCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterName">multiRegionClusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference">MemorydbMultiRegionClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffixInput">multiRegionClusterNameSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupNameInput">multiRegionParameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShardsInput">numShardsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabledInput">tlsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategyInput">updateStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffix">multiRegionClusterNameSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupName">multiRegionParameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShards">numShards</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabled">tlsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategy">updateStrategy</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `multiRegionClusterName`<sup>Required</sup> <a name="multiRegionClusterName" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterName"></a>

```java
public java.lang.String getMultiRegionClusterName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.timeouts"></a>

```java
public MemorydbMultiRegionClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference">MemorydbMultiRegionClusterTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `multiRegionClusterNameSuffixInput`<sup>Optional</sup> <a name="multiRegionClusterNameSuffixInput" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffixInput"></a>

```java
public java.lang.String getMultiRegionClusterNameSuffixInput();
```

- *Type:* java.lang.String

---

##### `multiRegionParameterGroupNameInput`<sup>Optional</sup> <a name="multiRegionParameterGroupNameInput" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupNameInput"></a>

```java
public java.lang.String getMultiRegionParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `numShardsInput`<sup>Optional</sup> <a name="numShardsInput" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShardsInput"></a>

```java
public java.lang.Number getNumShardsInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a>

---

##### `tlsEnabledInput`<sup>Optional</sup> <a name="tlsEnabledInput" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabledInput"></a>

```java
public java.lang.Object getTlsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `updateStrategyInput`<sup>Optional</sup> <a name="updateStrategyInput" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategyInput"></a>

```java
public java.lang.String getUpdateStrategyInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `multiRegionClusterNameSuffix`<sup>Required</sup> <a name="multiRegionClusterNameSuffix" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionClusterNameSuffix"></a>

```java
public java.lang.String getMultiRegionClusterNameSuffix();
```

- *Type:* java.lang.String

---

##### `multiRegionParameterGroupName`<sup>Required</sup> <a name="multiRegionParameterGroupName" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.multiRegionParameterGroupName"></a>

```java
public java.lang.String getMultiRegionParameterGroupName();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `numShards`<sup>Required</sup> <a name="numShards" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.numShards"></a>

```java
public java.lang.Number getNumShards();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tlsEnabled`<sup>Required</sup> <a name="tlsEnabled" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tlsEnabled"></a>

```java
public java.lang.Object getTlsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `updateStrategy`<sup>Required</sup> <a name="updateStrategy" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.updateStrategy"></a>

```java
public java.lang.String getUpdateStrategy();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MemorydbMultiRegionClusterConfig <a name="MemorydbMultiRegionClusterConfig" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.memorydb_multi_region_cluster.MemorydbMultiRegionClusterConfig;

MemorydbMultiRegionClusterConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .multiRegionClusterNameSuffix(java.lang.String)
    .nodeType(java.lang.String)
//  .description(java.lang.String)
//  .engine(java.lang.String)
//  .engineVersion(java.lang.String)
//  .multiRegionParameterGroupName(java.lang.String)
//  .numShards(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MemorydbMultiRegionClusterTimeouts)
//  .tlsEnabled(java.lang.Boolean)
//  .tlsEnabled(IResolvable)
//  .updateStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionClusterNameSuffix">multiRegionClusterNameSuffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#multi_region_cluster_name_suffix MemorydbMultiRegionCluster#multi_region_cluster_name_suffix}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#node_type MemorydbMultiRegionCluster#node_type}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#description MemorydbMultiRegionCluster#description}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#engine MemorydbMultiRegionCluster#engine}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#engine_version MemorydbMultiRegionCluster#engine_version}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionParameterGroupName">multiRegionParameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#multi_region_parameter_group_name MemorydbMultiRegionCluster#multi_region_parameter_group_name}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.numShards">numShards</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#num_shards MemorydbMultiRegionCluster#num_shards}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#tags MemorydbMultiRegionCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tlsEnabled">tlsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#tls_enabled MemorydbMultiRegionCluster#tls_enabled}. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.updateStrategy">updateStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#update_strategy MemorydbMultiRegionCluster#update_strategy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `multiRegionClusterNameSuffix`<sup>Required</sup> <a name="multiRegionClusterNameSuffix" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionClusterNameSuffix"></a>

```java
public java.lang.String getMultiRegionClusterNameSuffix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#multi_region_cluster_name_suffix MemorydbMultiRegionCluster#multi_region_cluster_name_suffix}.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#node_type MemorydbMultiRegionCluster#node_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#description MemorydbMultiRegionCluster#description}.

---

##### `engine`<sup>Optional</sup> <a name="engine" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#engine MemorydbMultiRegionCluster#engine}.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#engine_version MemorydbMultiRegionCluster#engine_version}.

---

##### `multiRegionParameterGroupName`<sup>Optional</sup> <a name="multiRegionParameterGroupName" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.multiRegionParameterGroupName"></a>

```java
public java.lang.String getMultiRegionParameterGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#multi_region_parameter_group_name MemorydbMultiRegionCluster#multi_region_parameter_group_name}.

---

##### `numShards`<sup>Optional</sup> <a name="numShards" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.numShards"></a>

```java
public java.lang.Number getNumShards();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#num_shards MemorydbMultiRegionCluster#num_shards}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#tags MemorydbMultiRegionCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.timeouts"></a>

```java
public MemorydbMultiRegionClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#timeouts MemorydbMultiRegionCluster#timeouts}

---

##### `tlsEnabled`<sup>Optional</sup> <a name="tlsEnabled" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.tlsEnabled"></a>

```java
public java.lang.Object getTlsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#tls_enabled MemorydbMultiRegionCluster#tls_enabled}.

---

##### `updateStrategy`<sup>Optional</sup> <a name="updateStrategy" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterConfig.property.updateStrategy"></a>

```java
public java.lang.String getUpdateStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#update_strategy MemorydbMultiRegionCluster#update_strategy}.

---

### MemorydbMultiRegionClusterTimeouts <a name="MemorydbMultiRegionClusterTimeouts" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.memorydb_multi_region_cluster.MemorydbMultiRegionClusterTimeouts;

MemorydbMultiRegionClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#create MemorydbMultiRegionCluster#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#delete MemorydbMultiRegionCluster#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/memorydb_multi_region_cluster#update MemorydbMultiRegionCluster#update}

---

## Classes <a name="Classes" id="Classes"></a>

### MemorydbMultiRegionClusterTimeoutsOutputReference <a name="MemorydbMultiRegionClusterTimeoutsOutputReference" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.memorydb_multi_region_cluster.MemorydbMultiRegionClusterTimeoutsOutputReference;

new MemorydbMultiRegionClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.memorydbMultiRegionCluster.MemorydbMultiRegionClusterTimeouts">MemorydbMultiRegionClusterTimeouts</a>

---



