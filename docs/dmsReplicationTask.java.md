# `dmsReplicationTask` Submodule <a name="`dmsReplicationTask` Submodule" id="@cdktf/provider-aws.dmsReplicationTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationTask <a name="DmsReplicationTask" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task aws_dms_replication_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_task.DmsReplicationTask;

DmsReplicationTask.Builder.create(Construct scope, java.lang.String id)
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
    .migrationType(java.lang.String)
    .replicationInstanceArn(java.lang.String)
    .replicationTaskId(java.lang.String)
    .sourceEndpointArn(java.lang.String)
    .tableMappings(java.lang.String)
    .targetEndpointArn(java.lang.String)
//  .cdcStartPosition(java.lang.String)
//  .cdcStartTime(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .replicationTaskSettings(java.lang.String)
//  .resourceIdentifier(java.lang.String)
//  .startReplicationTask(java.lang.Boolean)
//  .startReplicationTask(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.migrationType">migrationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#migration_type DmsReplicationTask#migration_type}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationInstanceArn">replicationInstanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskId">replicationTaskId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#replication_task_id DmsReplicationTask#replication_task_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.sourceEndpointArn">sourceEndpointArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tableMappings">tableMappings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.targetEndpointArn">targetEndpointArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartPosition">cdcStartPosition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartTime">cdcStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#id DmsReplicationTask#id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskSettings">replicationTaskSettings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.resourceIdentifier">resourceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#resource_identifier DmsReplicationTask#resource_identifier}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.startReplicationTask">startReplicationTask</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#start_replication_task DmsReplicationTask#start_replication_task}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#tags DmsReplicationTask#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#tags_all DmsReplicationTask#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `migrationType`<sup>Required</sup> <a name="migrationType" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.migrationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#migration_type DmsReplicationTask#migration_type}.

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="replicationInstanceArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationInstanceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}.

---

##### `replicationTaskId`<sup>Required</sup> <a name="replicationTaskId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#replication_task_id DmsReplicationTask#replication_task_id}.

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="sourceEndpointArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.sourceEndpointArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}.

---

##### `tableMappings`<sup>Required</sup> <a name="tableMappings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tableMappings"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}.

---

##### `targetEndpointArn`<sup>Required</sup> <a name="targetEndpointArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.targetEndpointArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}.

---

##### `cdcStartPosition`<sup>Optional</sup> <a name="cdcStartPosition" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartPosition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}.

---

##### `cdcStartTime`<sup>Optional</sup> <a name="cdcStartTime" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.cdcStartTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#id DmsReplicationTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#region DmsReplicationTask#region}

---

##### `replicationTaskSettings`<sup>Optional</sup> <a name="replicationTaskSettings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.replicationTaskSettings"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}.

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.resourceIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#resource_identifier DmsReplicationTask#resource_identifier}.

---

##### `startReplicationTask`<sup>Optional</sup> <a name="startReplicationTask" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.startReplicationTask"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#start_replication_task DmsReplicationTask#start_replication_task}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#tags DmsReplicationTask#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#tags_all DmsReplicationTask#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartPosition">resetCdcStartPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartTime">resetCdcStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskSettings">resetReplicationTaskSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetResourceIdentifier">resetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetStartReplicationTask">resetStartReplicationTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCdcStartPosition` <a name="resetCdcStartPosition" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartPosition"></a>

```java
public void resetCdcStartPosition()
```

##### `resetCdcStartTime` <a name="resetCdcStartTime" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetCdcStartTime"></a>

```java
public void resetCdcStartTime()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReplicationTaskSettings` <a name="resetReplicationTaskSettings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetReplicationTaskSettings"></a>

```java
public void resetReplicationTaskSettings()
```

##### `resetResourceIdentifier` <a name="resetResourceIdentifier" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetResourceIdentifier"></a>

```java
public void resetResourceIdentifier()
```

##### `resetStartReplicationTask` <a name="resetStartReplicationTask" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetStartReplicationTask"></a>

```java
public void resetStartReplicationTask()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DmsReplicationTask resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_task.DmsReplicationTask;

DmsReplicationTask.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_task.DmsReplicationTask;

DmsReplicationTask.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_task.DmsReplicationTask;

DmsReplicationTask.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_task.DmsReplicationTask;

DmsReplicationTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DmsReplicationTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DmsReplicationTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DmsReplicationTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DmsReplicationTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DmsReplicationTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskArn">replicationTaskArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPositionInput">cdcStartPositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTimeInput">cdcStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationTypeInput">migrationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArnInput">replicationInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdInput">replicationTaskIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettingsInput">replicationTaskSettingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.resourceIdentifierInput">resourceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArnInput">sourceEndpointArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTaskInput">startReplicationTaskInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappingsInput">tableMappingsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArnInput">targetEndpointArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPosition">cdcStartPosition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTime">cdcStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationType">migrationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArn">replicationInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskId">replicationTaskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettings">replicationTaskSettings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.resourceIdentifier">resourceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArn">sourceEndpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTask">startReplicationTask</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappings">tableMappings</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArn">targetEndpointArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `replicationTaskArn`<sup>Required</sup> <a name="replicationTaskArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskArn"></a>

```java
public java.lang.String getReplicationTaskArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `cdcStartPositionInput`<sup>Optional</sup> <a name="cdcStartPositionInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPositionInput"></a>

```java
public java.lang.String getCdcStartPositionInput();
```

- *Type:* java.lang.String

---

##### `cdcStartTimeInput`<sup>Optional</sup> <a name="cdcStartTimeInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTimeInput"></a>

```java
public java.lang.String getCdcStartTimeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `migrationTypeInput`<sup>Optional</sup> <a name="migrationTypeInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationTypeInput"></a>

```java
public java.lang.String getMigrationTypeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `replicationInstanceArnInput`<sup>Optional</sup> <a name="replicationInstanceArnInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArnInput"></a>

```java
public java.lang.String getReplicationInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `replicationTaskIdInput`<sup>Optional</sup> <a name="replicationTaskIdInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskIdInput"></a>

```java
public java.lang.String getReplicationTaskIdInput();
```

- *Type:* java.lang.String

---

##### `replicationTaskSettingsInput`<sup>Optional</sup> <a name="replicationTaskSettingsInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettingsInput"></a>

```java
public java.lang.String getReplicationTaskSettingsInput();
```

- *Type:* java.lang.String

---

##### `resourceIdentifierInput`<sup>Optional</sup> <a name="resourceIdentifierInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.resourceIdentifierInput"></a>

```java
public java.lang.String getResourceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `sourceEndpointArnInput`<sup>Optional</sup> <a name="sourceEndpointArnInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArnInput"></a>

```java
public java.lang.String getSourceEndpointArnInput();
```

- *Type:* java.lang.String

---

##### `startReplicationTaskInput`<sup>Optional</sup> <a name="startReplicationTaskInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTaskInput"></a>

```java
public java.lang.Object getStartReplicationTaskInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tableMappingsInput`<sup>Optional</sup> <a name="tableMappingsInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappingsInput"></a>

```java
public java.lang.String getTableMappingsInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetEndpointArnInput`<sup>Optional</sup> <a name="targetEndpointArnInput" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArnInput"></a>

```java
public java.lang.String getTargetEndpointArnInput();
```

- *Type:* java.lang.String

---

##### `cdcStartPosition`<sup>Required</sup> <a name="cdcStartPosition" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartPosition"></a>

```java
public java.lang.String getCdcStartPosition();
```

- *Type:* java.lang.String

---

##### `cdcStartTime`<sup>Required</sup> <a name="cdcStartTime" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.cdcStartTime"></a>

```java
public java.lang.String getCdcStartTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `migrationType`<sup>Required</sup> <a name="migrationType" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.migrationType"></a>

```java
public java.lang.String getMigrationType();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="replicationInstanceArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationInstanceArn"></a>

```java
public java.lang.String getReplicationInstanceArn();
```

- *Type:* java.lang.String

---

##### `replicationTaskId`<sup>Required</sup> <a name="replicationTaskId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskId"></a>

```java
public java.lang.String getReplicationTaskId();
```

- *Type:* java.lang.String

---

##### `replicationTaskSettings`<sup>Required</sup> <a name="replicationTaskSettings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.replicationTaskSettings"></a>

```java
public java.lang.String getReplicationTaskSettings();
```

- *Type:* java.lang.String

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.resourceIdentifier"></a>

```java
public java.lang.String getResourceIdentifier();
```

- *Type:* java.lang.String

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="sourceEndpointArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.sourceEndpointArn"></a>

```java
public java.lang.String getSourceEndpointArn();
```

- *Type:* java.lang.String

---

##### `startReplicationTask`<sup>Required</sup> <a name="startReplicationTask" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.startReplicationTask"></a>

```java
public java.lang.Object getStartReplicationTask();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tableMappings`<sup>Required</sup> <a name="tableMappings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tableMappings"></a>

```java
public java.lang.String getTableMappings();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetEndpointArn`<sup>Required</sup> <a name="targetEndpointArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.targetEndpointArn"></a>

```java
public java.lang.String getTargetEndpointArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTask.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationTaskConfig <a name="DmsReplicationTaskConfig" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dms_replication_task.DmsReplicationTaskConfig;

DmsReplicationTaskConfig.builder()
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
    .migrationType(java.lang.String)
    .replicationInstanceArn(java.lang.String)
    .replicationTaskId(java.lang.String)
    .sourceEndpointArn(java.lang.String)
    .tableMappings(java.lang.String)
    .targetEndpointArn(java.lang.String)
//  .cdcStartPosition(java.lang.String)
//  .cdcStartTime(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .replicationTaskSettings(java.lang.String)
//  .resourceIdentifier(java.lang.String)
//  .startReplicationTask(java.lang.Boolean)
//  .startReplicationTask(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.migrationType">migrationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#migration_type DmsReplicationTask#migration_type}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationInstanceArn">replicationInstanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskId">replicationTaskId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#replication_task_id DmsReplicationTask#replication_task_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.sourceEndpointArn">sourceEndpointArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tableMappings">tableMappings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.targetEndpointArn">targetEndpointArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartPosition">cdcStartPosition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartTime">cdcStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#id DmsReplicationTask#id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskSettings">replicationTaskSettings</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.resourceIdentifier">resourceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#resource_identifier DmsReplicationTask#resource_identifier}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.startReplicationTask">startReplicationTask</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#start_replication_task DmsReplicationTask#start_replication_task}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#tags DmsReplicationTask#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#tags_all DmsReplicationTask#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `migrationType`<sup>Required</sup> <a name="migrationType" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.migrationType"></a>

```java
public java.lang.String getMigrationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#migration_type DmsReplicationTask#migration_type}.

---

##### `replicationInstanceArn`<sup>Required</sup> <a name="replicationInstanceArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationInstanceArn"></a>

```java
public java.lang.String getReplicationInstanceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}.

---

##### `replicationTaskId`<sup>Required</sup> <a name="replicationTaskId" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskId"></a>

```java
public java.lang.String getReplicationTaskId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#replication_task_id DmsReplicationTask#replication_task_id}.

---

##### `sourceEndpointArn`<sup>Required</sup> <a name="sourceEndpointArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.sourceEndpointArn"></a>

```java
public java.lang.String getSourceEndpointArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}.

---

##### `tableMappings`<sup>Required</sup> <a name="tableMappings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tableMappings"></a>

```java
public java.lang.String getTableMappings();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}.

---

##### `targetEndpointArn`<sup>Required</sup> <a name="targetEndpointArn" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.targetEndpointArn"></a>

```java
public java.lang.String getTargetEndpointArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}.

---

##### `cdcStartPosition`<sup>Optional</sup> <a name="cdcStartPosition" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartPosition"></a>

```java
public java.lang.String getCdcStartPosition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}.

---

##### `cdcStartTime`<sup>Optional</sup> <a name="cdcStartTime" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.cdcStartTime"></a>

```java
public java.lang.String getCdcStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#id DmsReplicationTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#region DmsReplicationTask#region}

---

##### `replicationTaskSettings`<sup>Optional</sup> <a name="replicationTaskSettings" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.replicationTaskSettings"></a>

```java
public java.lang.String getReplicationTaskSettings();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}.

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.resourceIdentifier"></a>

```java
public java.lang.String getResourceIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#resource_identifier DmsReplicationTask#resource_identifier}.

---

##### `startReplicationTask`<sup>Optional</sup> <a name="startReplicationTask" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.startReplicationTask"></a>

```java
public java.lang.Object getStartReplicationTask();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#start_replication_task DmsReplicationTask#start_replication_task}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#tags DmsReplicationTask#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.dmsReplicationTask.DmsReplicationTaskConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_task#tags_all DmsReplicationTask#tags_all}.

---



