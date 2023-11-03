# `aws_msk_replicator`

Refer to the Terraform Registory for docs: [`aws_msk_replicator`](https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator).

# `mskReplicator` Submodule <a name="`mskReplicator` Submodule" id="@cdktf/provider-aws.mskReplicator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskReplicator <a name="MskReplicator" id="@cdktf/provider-aws.mskReplicator.MskReplicator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator aws_msk_replicator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicator;

MskReplicator.Builder.create(Construct scope, java.lang.String id)
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
    .kafkaCluster(IResolvable)
    .kafkaCluster(java.util.List<MskReplicatorKafkaCluster>)
    .replicationInfoList(MskReplicatorReplicationInfoListStruct)
    .replicatorName(java.lang.String)
    .serviceExecutionRoleArn(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MskReplicatorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.kafkaCluster">kafkaCluster</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>></code> | kafka_cluster block. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.replicationInfoList">replicationInfoList</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a></code> | replication_info_list block. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.replicatorName">replicatorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#description MskReplicator#description}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#id MskReplicator#id}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#tags MskReplicator#tags}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#tags_all MskReplicator#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.kafkaCluster"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>>

kafka_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#kafka_cluster MskReplicator#kafka_cluster}

---

##### `replicationInfoList`<sup>Required</sup> <a name="replicationInfoList" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.replicationInfoList"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>

replication_info_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#replication_info_list MskReplicator#replication_info_list}

---

##### `replicatorName`<sup>Required</sup> <a name="replicatorName" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.replicatorName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}.

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.serviceExecutionRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#description MskReplicator#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#id MskReplicator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#tags MskReplicator#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#tags_all MskReplicator#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.mskReplicator.MskReplicator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#timeouts MskReplicator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.putKafkaCluster">putKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.putReplicationInfoList">putReplicationInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskReplicator.MskReplicator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.mskReplicator.MskReplicator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.mskReplicator.MskReplicator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskReplicator.MskReplicator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.mskReplicator.MskReplicator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.mskReplicator.MskReplicator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.mskReplicator.MskReplicator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.mskReplicator.MskReplicator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.mskReplicator.MskReplicator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.mskReplicator.MskReplicator.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.mskReplicator.MskReplicator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.mskReplicator.MskReplicator.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mskReplicator.MskReplicator.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mskReplicator.MskReplicator.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.mskReplicator.MskReplicator.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.mskReplicator.MskReplicator.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.mskReplicator.MskReplicator.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putKafkaCluster` <a name="putKafkaCluster" id="@cdktf/provider-aws.mskReplicator.MskReplicator.putKafkaCluster"></a>

```java
public void putKafkaCluster(IResolvable OR java.util.List<MskReplicatorKafkaCluster> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskReplicator.MskReplicator.putKafkaCluster.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>>

---

##### `putReplicationInfoList` <a name="putReplicationInfoList" id="@cdktf/provider-aws.mskReplicator.MskReplicator.putReplicationInfoList"></a>

```java
public void putReplicationInfoList(MskReplicatorReplicationInfoListStruct value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskReplicator.MskReplicator.putReplicationInfoList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.mskReplicator.MskReplicator.putTimeouts"></a>

```java
public void putTimeouts(MskReplicatorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskReplicator.MskReplicator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.mskReplicator.MskReplicator.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.mskReplicator.MskReplicator.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.mskReplicator.MskReplicator.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.mskReplicator.MskReplicator.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.mskReplicator.MskReplicator.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MskReplicator resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.mskReplicator.MskReplicator.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicator;

MskReplicator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskReplicator.MskReplicator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.mskReplicator.MskReplicator.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicator;

MskReplicator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskReplicator.MskReplicator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.mskReplicator.MskReplicator.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicator;

MskReplicator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.mskReplicator.MskReplicator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.mskReplicator.MskReplicator.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicator;

MskReplicator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MskReplicator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MskReplicator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.mskReplicator.MskReplicator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.mskReplicator.MskReplicator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MskReplicator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.mskReplicator.MskReplicator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MskReplicator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mskReplicator.MskReplicator.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MskReplicator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.currentVersion">currentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.kafkaCluster">kafkaCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList">MskReplicatorKafkaClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.replicationInfoList">replicationInfoList</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference">MskReplicatorReplicationInfoListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference">MskReplicatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.kafkaClusterInput">kafkaClusterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.replicationInfoListInput">replicationInfoListInput</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.replicatorNameInput">replicatorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.serviceExecutionRoleArnInput">serviceExecutionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.replicatorName">replicatorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.currentVersion"></a>

```java
public java.lang.String getCurrentVersion();
```

- *Type:* java.lang.String

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.kafkaCluster"></a>

```java
public MskReplicatorKafkaClusterList getKafkaCluster();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList">MskReplicatorKafkaClusterList</a>

---

##### `replicationInfoList`<sup>Required</sup> <a name="replicationInfoList" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.replicationInfoList"></a>

```java
public MskReplicatorReplicationInfoListStructOutputReference getReplicationInfoList();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference">MskReplicatorReplicationInfoListStructOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.timeouts"></a>

```java
public MskReplicatorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference">MskReplicatorTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kafkaClusterInput`<sup>Optional</sup> <a name="kafkaClusterInput" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.kafkaClusterInput"></a>

```java
public java.lang.Object getKafkaClusterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>>

---

##### `replicationInfoListInput`<sup>Optional</sup> <a name="replicationInfoListInput" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.replicationInfoListInput"></a>

```java
public MskReplicatorReplicationInfoListStruct getReplicationInfoListInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>

---

##### `replicatorNameInput`<sup>Optional</sup> <a name="replicatorNameInput" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.replicatorNameInput"></a>

```java
public java.lang.String getReplicatorNameInput();
```

- *Type:* java.lang.String

---

##### `serviceExecutionRoleArnInput`<sup>Optional</sup> <a name="serviceExecutionRoleArnInput" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.serviceExecutionRoleArnInput"></a>

```java
public java.lang.String getServiceExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `replicatorName`<sup>Required</sup> <a name="replicatorName" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.replicatorName"></a>

```java
public java.lang.String getReplicatorName();
```

- *Type:* java.lang.String

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.mskReplicator.MskReplicator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MskReplicatorConfig <a name="MskReplicatorConfig" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorConfig;

MskReplicatorConfig.builder()
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
    .kafkaCluster(IResolvable)
    .kafkaCluster(java.util.List<MskReplicatorKafkaCluster>)
    .replicationInfoList(MskReplicatorReplicationInfoListStruct)
    .replicatorName(java.lang.String)
    .serviceExecutionRoleArn(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MskReplicatorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.kafkaCluster">kafkaCluster</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>></code> | kafka_cluster block. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.replicationInfoList">replicationInfoList</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a></code> | replication_info_list block. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.replicatorName">replicatorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#description MskReplicator#description}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#id MskReplicator#id}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#tags MskReplicator#tags}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#tags_all MskReplicator#tags_all}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.kafkaCluster"></a>

```java
public java.lang.Object getKafkaCluster();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>>

kafka_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#kafka_cluster MskReplicator#kafka_cluster}

---

##### `replicationInfoList`<sup>Required</sup> <a name="replicationInfoList" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.replicationInfoList"></a>

```java
public MskReplicatorReplicationInfoListStruct getReplicationInfoList();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>

replication_info_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#replication_info_list MskReplicator#replication_info_list}

---

##### `replicatorName`<sup>Required</sup> <a name="replicatorName" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.replicatorName"></a>

```java
public java.lang.String getReplicatorName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#replicator_name MskReplicator#replicator_name}.

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.serviceExecutionRoleArn"></a>

```java
public java.lang.String getServiceExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#service_execution_role_arn MskReplicator#service_execution_role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#description MskReplicator#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#id MskReplicator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#tags MskReplicator#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#tags_all MskReplicator#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.mskReplicator.MskReplicatorConfig.property.timeouts"></a>

```java
public MskReplicatorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#timeouts MskReplicator#timeouts}

---

### MskReplicatorKafkaCluster <a name="MskReplicatorKafkaCluster" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorKafkaCluster;

MskReplicatorKafkaCluster.builder()
    .amazonMskCluster(MskReplicatorKafkaClusterAmazonMskCluster)
    .vpcConfig(MskReplicatorKafkaClusterVpcConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster.property.amazonMskCluster">amazonMskCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a></code> | amazon_msk_cluster block. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a></code> | vpc_config block. |

---

##### `amazonMskCluster`<sup>Required</sup> <a name="amazonMskCluster" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster.property.amazonMskCluster"></a>

```java
public MskReplicatorKafkaClusterAmazonMskCluster getAmazonMskCluster();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a>

amazon_msk_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#amazon_msk_cluster MskReplicator#amazon_msk_cluster}

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster.property.vpcConfig"></a>

```java
public MskReplicatorKafkaClusterVpcConfig getVpcConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#vpc_config MskReplicator#vpc_config}

---

### MskReplicatorKafkaClusterAmazonMskCluster <a name="MskReplicatorKafkaClusterAmazonMskCluster" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorKafkaClusterAmazonMskCluster;

MskReplicatorKafkaClusterAmazonMskCluster.builder()
    .mskClusterArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster.property.mskClusterArn">mskClusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#msk_cluster_arn MskReplicator#msk_cluster_arn}. |

---

##### `mskClusterArn`<sup>Required</sup> <a name="mskClusterArn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster.property.mskClusterArn"></a>

```java
public java.lang.String getMskClusterArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#msk_cluster_arn MskReplicator#msk_cluster_arn}.

---

### MskReplicatorKafkaClusterVpcConfig <a name="MskReplicatorKafkaClusterVpcConfig" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorKafkaClusterVpcConfig;

MskReplicatorKafkaClusterVpcConfig.builder()
    .subnetIds(java.util.List<java.lang.String>)
//  .securityGroupsIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#subnet_ids MskReplicator#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig.property.securityGroupsIds">securityGroupsIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#security_groups_ids MskReplicator#security_groups_ids}. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#subnet_ids MskReplicator#subnet_ids}.

---

##### `securityGroupsIds`<sup>Optional</sup> <a name="securityGroupsIds" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig.property.securityGroupsIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#security_groups_ids MskReplicator#security_groups_ids}.

---

### MskReplicatorReplicationInfoListConsumerGroupReplication <a name="MskReplicatorReplicationInfoListConsumerGroupReplication" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorReplicationInfoListConsumerGroupReplication;

MskReplicatorReplicationInfoListConsumerGroupReplication.builder()
    .consumerGroupsToReplicate(java.util.List<java.lang.String>)
//  .consumerGroupsToExclude(java.util.List<java.lang.String>)
//  .detectAndCopyNewConsumerGroups(java.lang.Boolean)
//  .detectAndCopyNewConsumerGroups(IResolvable)
//  .synchroniseConsumerGroupOffsets(java.lang.Boolean)
//  .synchroniseConsumerGroupOffsets(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToReplicate">consumerGroupsToReplicate</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#consumer_groups_to_replicate MskReplicator#consumer_groups_to_replicate}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToExclude">consumerGroupsToExclude</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#consumer_groups_to_exclude MskReplicator#consumer_groups_to_exclude}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.detectAndCopyNewConsumerGroups">detectAndCopyNewConsumerGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#detect_and_copy_new_consumer_groups MskReplicator#detect_and_copy_new_consumer_groups}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.synchroniseConsumerGroupOffsets">synchroniseConsumerGroupOffsets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#synchronise_consumer_group_offsets MskReplicator#synchronise_consumer_group_offsets}. |

---

##### `consumerGroupsToReplicate`<sup>Required</sup> <a name="consumerGroupsToReplicate" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToReplicate"></a>

```java
public java.util.List<java.lang.String> getConsumerGroupsToReplicate();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#consumer_groups_to_replicate MskReplicator#consumer_groups_to_replicate}.

---

##### `consumerGroupsToExclude`<sup>Optional</sup> <a name="consumerGroupsToExclude" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.consumerGroupsToExclude"></a>

```java
public java.util.List<java.lang.String> getConsumerGroupsToExclude();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#consumer_groups_to_exclude MskReplicator#consumer_groups_to_exclude}.

---

##### `detectAndCopyNewConsumerGroups`<sup>Optional</sup> <a name="detectAndCopyNewConsumerGroups" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.detectAndCopyNewConsumerGroups"></a>

```java
public java.lang.Object getDetectAndCopyNewConsumerGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#detect_and_copy_new_consumer_groups MskReplicator#detect_and_copy_new_consumer_groups}.

---

##### `synchroniseConsumerGroupOffsets`<sup>Optional</sup> <a name="synchroniseConsumerGroupOffsets" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication.property.synchroniseConsumerGroupOffsets"></a>

```java
public java.lang.Object getSynchroniseConsumerGroupOffsets();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#synchronise_consumer_group_offsets MskReplicator#synchronise_consumer_group_offsets}.

---

### MskReplicatorReplicationInfoListStruct <a name="MskReplicatorReplicationInfoListStruct" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorReplicationInfoListStruct;

MskReplicatorReplicationInfoListStruct.builder()
    .consumerGroupReplication(IResolvable)
    .consumerGroupReplication(java.util.List<MskReplicatorReplicationInfoListConsumerGroupReplication>)
    .sourceKafkaClusterArn(java.lang.String)
    .targetCompressionType(java.lang.String)
    .targetKafkaClusterArn(java.lang.String)
    .topicReplication(IResolvable)
    .topicReplication(java.util.List<MskReplicatorReplicationInfoListTopicReplication>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.consumerGroupReplication">consumerGroupReplication</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>></code> | consumer_group_replication block. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterArn">sourceKafkaClusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#source_kafka_cluster_arn MskReplicator#source_kafka_cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetCompressionType">targetCompressionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#target_compression_type MskReplicator#target_compression_type}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterArn">targetKafkaClusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#target_kafka_cluster_arn MskReplicator#target_kafka_cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.topicReplication">topicReplication</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>></code> | topic_replication block. |

---

##### `consumerGroupReplication`<sup>Required</sup> <a name="consumerGroupReplication" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.consumerGroupReplication"></a>

```java
public java.lang.Object getConsumerGroupReplication();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>>

consumer_group_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#consumer_group_replication MskReplicator#consumer_group_replication}

---

##### `sourceKafkaClusterArn`<sup>Required</sup> <a name="sourceKafkaClusterArn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.sourceKafkaClusterArn"></a>

```java
public java.lang.String getSourceKafkaClusterArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#source_kafka_cluster_arn MskReplicator#source_kafka_cluster_arn}.

---

##### `targetCompressionType`<sup>Required</sup> <a name="targetCompressionType" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetCompressionType"></a>

```java
public java.lang.String getTargetCompressionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#target_compression_type MskReplicator#target_compression_type}.

---

##### `targetKafkaClusterArn`<sup>Required</sup> <a name="targetKafkaClusterArn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.targetKafkaClusterArn"></a>

```java
public java.lang.String getTargetKafkaClusterArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#target_kafka_cluster_arn MskReplicator#target_kafka_cluster_arn}.

---

##### `topicReplication`<sup>Required</sup> <a name="topicReplication" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct.property.topicReplication"></a>

```java
public java.lang.Object getTopicReplication();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>>

topic_replication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#topic_replication MskReplicator#topic_replication}

---

### MskReplicatorReplicationInfoListTopicReplication <a name="MskReplicatorReplicationInfoListTopicReplication" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorReplicationInfoListTopicReplication;

MskReplicatorReplicationInfoListTopicReplication.builder()
    .topicsToReplicate(java.util.List<java.lang.String>)
//  .copyAccessControlListsForTopics(java.lang.Boolean)
//  .copyAccessControlListsForTopics(IResolvable)
//  .copyTopicConfigurations(java.lang.Boolean)
//  .copyTopicConfigurations(IResolvable)
//  .detectAndCopyNewTopics(java.lang.Boolean)
//  .detectAndCopyNewTopics(IResolvable)
//  .topicsToExclude(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToReplicate">topicsToReplicate</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#topics_to_replicate MskReplicator#topics_to_replicate}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyAccessControlListsForTopics">copyAccessControlListsForTopics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#copy_access_control_lists_for_topics MskReplicator#copy_access_control_lists_for_topics}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyTopicConfigurations">copyTopicConfigurations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#copy_topic_configurations MskReplicator#copy_topic_configurations}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.detectAndCopyNewTopics">detectAndCopyNewTopics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#detect_and_copy_new_topics MskReplicator#detect_and_copy_new_topics}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToExclude">topicsToExclude</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#topics_to_exclude MskReplicator#topics_to_exclude}. |

---

##### `topicsToReplicate`<sup>Required</sup> <a name="topicsToReplicate" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToReplicate"></a>

```java
public java.util.List<java.lang.String> getTopicsToReplicate();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#topics_to_replicate MskReplicator#topics_to_replicate}.

---

##### `copyAccessControlListsForTopics`<sup>Optional</sup> <a name="copyAccessControlListsForTopics" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyAccessControlListsForTopics"></a>

```java
public java.lang.Object getCopyAccessControlListsForTopics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#copy_access_control_lists_for_topics MskReplicator#copy_access_control_lists_for_topics}.

---

##### `copyTopicConfigurations`<sup>Optional</sup> <a name="copyTopicConfigurations" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.copyTopicConfigurations"></a>

```java
public java.lang.Object getCopyTopicConfigurations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#copy_topic_configurations MskReplicator#copy_topic_configurations}.

---

##### `detectAndCopyNewTopics`<sup>Optional</sup> <a name="detectAndCopyNewTopics" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.detectAndCopyNewTopics"></a>

```java
public java.lang.Object getDetectAndCopyNewTopics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#detect_and_copy_new_topics MskReplicator#detect_and_copy_new_topics}.

---

##### `topicsToExclude`<sup>Optional</sup> <a name="topicsToExclude" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication.property.topicsToExclude"></a>

```java
public java.util.List<java.lang.String> getTopicsToExclude();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#topics_to_exclude MskReplicator#topics_to_exclude}.

---

### MskReplicatorTimeouts <a name="MskReplicatorTimeouts" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorTimeouts;

MskReplicatorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#create MskReplicator#create}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#delete MskReplicator#delete}. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#update MskReplicator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#create MskReplicator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#delete MskReplicator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.24.0/docs/resources/msk_replicator#update MskReplicator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskReplicatorKafkaClusterAmazonMskClusterOutputReference <a name="MskReplicatorKafkaClusterAmazonMskClusterOutputReference" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference;

new MskReplicatorKafkaClusterAmazonMskClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.mskClusterArnInput">mskClusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.mskClusterArn">mskClusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mskClusterArnInput`<sup>Optional</sup> <a name="mskClusterArnInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.mskClusterArnInput"></a>

```java
public java.lang.String getMskClusterArnInput();
```

- *Type:* java.lang.String

---

##### `mskClusterArn`<sup>Required</sup> <a name="mskClusterArn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.mskClusterArn"></a>

```java
public java.lang.String getMskClusterArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference.property.internalValue"></a>

```java
public MskReplicatorKafkaClusterAmazonMskCluster getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a>

---


### MskReplicatorKafkaClusterList <a name="MskReplicatorKafkaClusterList" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorKafkaClusterList;

new MskReplicatorKafkaClusterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.get"></a>

```java
public MskReplicatorKafkaClusterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>>

---


### MskReplicatorKafkaClusterOutputReference <a name="MskReplicatorKafkaClusterOutputReference" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorKafkaClusterOutputReference;

new MskReplicatorKafkaClusterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putAmazonMskCluster">putAmazonMskCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmazonMskCluster` <a name="putAmazonMskCluster" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putAmazonMskCluster"></a>

```java
public void putAmazonMskCluster(MskReplicatorKafkaClusterAmazonMskCluster value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putAmazonMskCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putVpcConfig"></a>

```java
public void putVpcConfig(MskReplicatorKafkaClusterVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.amazonMskCluster">amazonMskCluster</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference">MskReplicatorKafkaClusterAmazonMskClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference">MskReplicatorKafkaClusterVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.amazonMskClusterInput">amazonMskClusterInput</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amazonMskCluster`<sup>Required</sup> <a name="amazonMskCluster" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.amazonMskCluster"></a>

```java
public MskReplicatorKafkaClusterAmazonMskClusterOutputReference getAmazonMskCluster();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskClusterOutputReference">MskReplicatorKafkaClusterAmazonMskClusterOutputReference</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.vpcConfig"></a>

```java
public MskReplicatorKafkaClusterVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference">MskReplicatorKafkaClusterVpcConfigOutputReference</a>

---

##### `amazonMskClusterInput`<sup>Optional</sup> <a name="amazonMskClusterInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.amazonMskClusterInput"></a>

```java
public MskReplicatorKafkaClusterAmazonMskCluster getAmazonMskClusterInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterAmazonMskCluster">MskReplicatorKafkaClusterAmazonMskCluster</a>

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.vpcConfigInput"></a>

```java
public MskReplicatorKafkaClusterVpcConfig getVpcConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaCluster">MskReplicatorKafkaCluster</a>

---


### MskReplicatorKafkaClusterVpcConfigOutputReference <a name="MskReplicatorKafkaClusterVpcConfigOutputReference" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorKafkaClusterVpcConfigOutputReference;

new MskReplicatorKafkaClusterVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.resetSecurityGroupsIds">resetSecurityGroupsIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupsIds` <a name="resetSecurityGroupsIds" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.resetSecurityGroupsIds"></a>

```java
public void resetSecurityGroupsIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.securityGroupsIdsInput">securityGroupsIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.securityGroupsIds">securityGroupsIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupsIdsInput`<sup>Optional</sup> <a name="securityGroupsIdsInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.securityGroupsIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupsIds`<sup>Required</sup> <a name="securityGroupsIds" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.securityGroupsIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfigOutputReference.property.internalValue"></a>

```java
public MskReplicatorKafkaClusterVpcConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorKafkaClusterVpcConfig">MskReplicatorKafkaClusterVpcConfig</a>

---


### MskReplicatorReplicationInfoListConsumerGroupReplicationList <a name="MskReplicatorReplicationInfoListConsumerGroupReplicationList" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList;

new MskReplicatorReplicationInfoListConsumerGroupReplicationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.get"></a>

```java
public MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>>

---


### MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference <a name="MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference;

new MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupsToExclude">resetConsumerGroupsToExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetDetectAndCopyNewConsumerGroups">resetDetectAndCopyNewConsumerGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetSynchroniseConsumerGroupOffsets">resetSynchroniseConsumerGroupOffsets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsumerGroupsToExclude` <a name="resetConsumerGroupsToExclude" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetConsumerGroupsToExclude"></a>

```java
public void resetConsumerGroupsToExclude()
```

##### `resetDetectAndCopyNewConsumerGroups` <a name="resetDetectAndCopyNewConsumerGroups" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetDetectAndCopyNewConsumerGroups"></a>

```java
public void resetDetectAndCopyNewConsumerGroups()
```

##### `resetSynchroniseConsumerGroupOffsets` <a name="resetSynchroniseConsumerGroupOffsets" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.resetSynchroniseConsumerGroupOffsets"></a>

```java
public void resetSynchroniseConsumerGroupOffsets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExcludeInput">consumerGroupsToExcludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicateInput">consumerGroupsToReplicateInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroupsInput">detectAndCopyNewConsumerGroupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsetsInput">synchroniseConsumerGroupOffsetsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExclude">consumerGroupsToExclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicate">consumerGroupsToReplicate</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroups">detectAndCopyNewConsumerGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsets">synchroniseConsumerGroupOffsets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerGroupsToExcludeInput`<sup>Optional</sup> <a name="consumerGroupsToExcludeInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExcludeInput"></a>

```java
public java.util.List<java.lang.String> getConsumerGroupsToExcludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `consumerGroupsToReplicateInput`<sup>Optional</sup> <a name="consumerGroupsToReplicateInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicateInput"></a>

```java
public java.util.List<java.lang.String> getConsumerGroupsToReplicateInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `detectAndCopyNewConsumerGroupsInput`<sup>Optional</sup> <a name="detectAndCopyNewConsumerGroupsInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroupsInput"></a>

```java
public java.lang.Object getDetectAndCopyNewConsumerGroupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `synchroniseConsumerGroupOffsetsInput`<sup>Optional</sup> <a name="synchroniseConsumerGroupOffsetsInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsetsInput"></a>

```java
public java.lang.Object getSynchroniseConsumerGroupOffsetsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `consumerGroupsToExclude`<sup>Required</sup> <a name="consumerGroupsToExclude" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToExclude"></a>

```java
public java.util.List<java.lang.String> getConsumerGroupsToExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `consumerGroupsToReplicate`<sup>Required</sup> <a name="consumerGroupsToReplicate" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.consumerGroupsToReplicate"></a>

```java
public java.util.List<java.lang.String> getConsumerGroupsToReplicate();
```

- *Type:* java.util.List<java.lang.String>

---

##### `detectAndCopyNewConsumerGroups`<sup>Required</sup> <a name="detectAndCopyNewConsumerGroups" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.detectAndCopyNewConsumerGroups"></a>

```java
public java.lang.Object getDetectAndCopyNewConsumerGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `synchroniseConsumerGroupOffsets`<sup>Required</sup> <a name="synchroniseConsumerGroupOffsets" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.synchroniseConsumerGroupOffsets"></a>

```java
public java.lang.Object getSynchroniseConsumerGroupOffsets();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>

---


### MskReplicatorReplicationInfoListStructOutputReference <a name="MskReplicatorReplicationInfoListStructOutputReference" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorReplicationInfoListStructOutputReference;

new MskReplicatorReplicationInfoListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication">putConsumerGroupReplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication">putTopicReplication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConsumerGroupReplication` <a name="putConsumerGroupReplication" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication"></a>

```java
public void putConsumerGroupReplication(IResolvable OR java.util.List<MskReplicatorReplicationInfoListConsumerGroupReplication> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putConsumerGroupReplication.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>>

---

##### `putTopicReplication` <a name="putTopicReplication" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication"></a>

```java
public void putTopicReplication(IResolvable OR java.util.List<MskReplicatorReplicationInfoListTopicReplication> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.putTopicReplication.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplication">consumerGroupReplication</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList">MskReplicatorReplicationInfoListConsumerGroupReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterAlias">sourceKafkaClusterAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterAlias">targetKafkaClusterAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplication">topicReplication</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList">MskReplicatorReplicationInfoListTopicReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplicationInput">consumerGroupReplicationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArnInput">sourceKafkaClusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionTypeInput">targetCompressionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArnInput">targetKafkaClusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplicationInput">topicReplicationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArn">sourceKafkaClusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionType">targetCompressionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArn">targetKafkaClusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consumerGroupReplication`<sup>Required</sup> <a name="consumerGroupReplication" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplication"></a>

```java
public MskReplicatorReplicationInfoListConsumerGroupReplicationList getConsumerGroupReplication();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplicationList">MskReplicatorReplicationInfoListConsumerGroupReplicationList</a>

---

##### `sourceKafkaClusterAlias`<sup>Required</sup> <a name="sourceKafkaClusterAlias" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterAlias"></a>

```java
public java.lang.String getSourceKafkaClusterAlias();
```

- *Type:* java.lang.String

---

##### `targetKafkaClusterAlias`<sup>Required</sup> <a name="targetKafkaClusterAlias" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterAlias"></a>

```java
public java.lang.String getTargetKafkaClusterAlias();
```

- *Type:* java.lang.String

---

##### `topicReplication`<sup>Required</sup> <a name="topicReplication" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplication"></a>

```java
public MskReplicatorReplicationInfoListTopicReplicationList getTopicReplication();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList">MskReplicatorReplicationInfoListTopicReplicationList</a>

---

##### `consumerGroupReplicationInput`<sup>Optional</sup> <a name="consumerGroupReplicationInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.consumerGroupReplicationInput"></a>

```java
public java.lang.Object getConsumerGroupReplicationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListConsumerGroupReplication">MskReplicatorReplicationInfoListConsumerGroupReplication</a>>

---

##### `sourceKafkaClusterArnInput`<sup>Optional</sup> <a name="sourceKafkaClusterArnInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArnInput"></a>

```java
public java.lang.String getSourceKafkaClusterArnInput();
```

- *Type:* java.lang.String

---

##### `targetCompressionTypeInput`<sup>Optional</sup> <a name="targetCompressionTypeInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionTypeInput"></a>

```java
public java.lang.String getTargetCompressionTypeInput();
```

- *Type:* java.lang.String

---

##### `targetKafkaClusterArnInput`<sup>Optional</sup> <a name="targetKafkaClusterArnInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArnInput"></a>

```java
public java.lang.String getTargetKafkaClusterArnInput();
```

- *Type:* java.lang.String

---

##### `topicReplicationInput`<sup>Optional</sup> <a name="topicReplicationInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.topicReplicationInput"></a>

```java
public java.lang.Object getTopicReplicationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>>

---

##### `sourceKafkaClusterArn`<sup>Required</sup> <a name="sourceKafkaClusterArn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.sourceKafkaClusterArn"></a>

```java
public java.lang.String getSourceKafkaClusterArn();
```

- *Type:* java.lang.String

---

##### `targetCompressionType`<sup>Required</sup> <a name="targetCompressionType" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetCompressionType"></a>

```java
public java.lang.String getTargetCompressionType();
```

- *Type:* java.lang.String

---

##### `targetKafkaClusterArn`<sup>Required</sup> <a name="targetKafkaClusterArn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.targetKafkaClusterArn"></a>

```java
public java.lang.String getTargetKafkaClusterArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStructOutputReference.property.internalValue"></a>

```java
public MskReplicatorReplicationInfoListStruct getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListStruct">MskReplicatorReplicationInfoListStruct</a>

---


### MskReplicatorReplicationInfoListTopicReplicationList <a name="MskReplicatorReplicationInfoListTopicReplicationList" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorReplicationInfoListTopicReplicationList;

new MskReplicatorReplicationInfoListTopicReplicationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.get"></a>

```java
public MskReplicatorReplicationInfoListTopicReplicationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>>

---


### MskReplicatorReplicationInfoListTopicReplicationOutputReference <a name="MskReplicatorReplicationInfoListTopicReplicationOutputReference" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference;

new MskReplicatorReplicationInfoListTopicReplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyAccessControlListsForTopics">resetCopyAccessControlListsForTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyTopicConfigurations">resetCopyTopicConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetDetectAndCopyNewTopics">resetDetectAndCopyNewTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicsToExclude">resetTopicsToExclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCopyAccessControlListsForTopics` <a name="resetCopyAccessControlListsForTopics" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyAccessControlListsForTopics"></a>

```java
public void resetCopyAccessControlListsForTopics()
```

##### `resetCopyTopicConfigurations` <a name="resetCopyTopicConfigurations" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetCopyTopicConfigurations"></a>

```java
public void resetCopyTopicConfigurations()
```

##### `resetDetectAndCopyNewTopics` <a name="resetDetectAndCopyNewTopics" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetDetectAndCopyNewTopics"></a>

```java
public void resetDetectAndCopyNewTopics()
```

##### `resetTopicsToExclude` <a name="resetTopicsToExclude" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.resetTopicsToExclude"></a>

```java
public void resetTopicsToExclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopicsInput">copyAccessControlListsForTopicsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurationsInput">copyTopicConfigurationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopicsInput">detectAndCopyNewTopicsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExcludeInput">topicsToExcludeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicateInput">topicsToReplicateInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopics">copyAccessControlListsForTopics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurations">copyTopicConfigurations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopics">detectAndCopyNewTopics</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExclude">topicsToExclude</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicate">topicsToReplicate</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `copyAccessControlListsForTopicsInput`<sup>Optional</sup> <a name="copyAccessControlListsForTopicsInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopicsInput"></a>

```java
public java.lang.Object getCopyAccessControlListsForTopicsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `copyTopicConfigurationsInput`<sup>Optional</sup> <a name="copyTopicConfigurationsInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurationsInput"></a>

```java
public java.lang.Object getCopyTopicConfigurationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `detectAndCopyNewTopicsInput`<sup>Optional</sup> <a name="detectAndCopyNewTopicsInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopicsInput"></a>

```java
public java.lang.Object getDetectAndCopyNewTopicsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `topicsToExcludeInput`<sup>Optional</sup> <a name="topicsToExcludeInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExcludeInput"></a>

```java
public java.util.List<java.lang.String> getTopicsToExcludeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `topicsToReplicateInput`<sup>Optional</sup> <a name="topicsToReplicateInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicateInput"></a>

```java
public java.util.List<java.lang.String> getTopicsToReplicateInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `copyAccessControlListsForTopics`<sup>Required</sup> <a name="copyAccessControlListsForTopics" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyAccessControlListsForTopics"></a>

```java
public java.lang.Object getCopyAccessControlListsForTopics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `copyTopicConfigurations`<sup>Required</sup> <a name="copyTopicConfigurations" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.copyTopicConfigurations"></a>

```java
public java.lang.Object getCopyTopicConfigurations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `detectAndCopyNewTopics`<sup>Required</sup> <a name="detectAndCopyNewTopics" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.detectAndCopyNewTopics"></a>

```java
public java.lang.Object getDetectAndCopyNewTopics();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `topicsToExclude`<sup>Required</sup> <a name="topicsToExclude" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToExclude"></a>

```java
public java.util.List<java.lang.String> getTopicsToExclude();
```

- *Type:* java.util.List<java.lang.String>

---

##### `topicsToReplicate`<sup>Required</sup> <a name="topicsToReplicate" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.topicsToReplicate"></a>

```java
public java.util.List<java.lang.String> getTopicsToReplicate();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplicationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorReplicationInfoListTopicReplication">MskReplicatorReplicationInfoListTopicReplication</a>

---


### MskReplicatorTimeoutsOutputReference <a name="MskReplicatorTimeoutsOutputReference" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.msk_replicator.MskReplicatorTimeoutsOutputReference;

new MskReplicatorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.mskReplicator.MskReplicatorTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.mskReplicator.MskReplicatorTimeouts">MskReplicatorTimeouts</a>

---



