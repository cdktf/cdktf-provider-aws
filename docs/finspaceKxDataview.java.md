# `finspaceKxDataview` Submodule <a name="`finspaceKxDataview` Submodule" id="@cdktf/provider-aws.finspaceKxDataview"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceKxDataview <a name="FinspaceKxDataview" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview aws_finspace_kx_dataview}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_dataview.FinspaceKxDataview;

FinspaceKxDataview.Builder.create(Construct scope, java.lang.String id)
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
    .autoUpdate(java.lang.Boolean)
    .autoUpdate(IResolvable)
    .azMode(java.lang.String)
    .databaseName(java.lang.String)
    .environmentId(java.lang.String)
    .name(java.lang.String)
//  .availabilityZoneId(java.lang.String)
//  .changesetId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .readWrite(java.lang.Boolean)
//  .readWrite(IResolvable)
//  .region(java.lang.String)
//  .segmentConfigurations(IResolvable)
//  .segmentConfigurations(java.util.List<FinspaceKxDataviewSegmentConfigurations>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FinspaceKxDataviewTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.autoUpdate">autoUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#auto_update FinspaceKxDataview#auto_update}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.azMode">azMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#az_mode FinspaceKxDataview#az_mode}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#database_name FinspaceKxDataview#database_name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.environmentId">environmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#environment_id FinspaceKxDataview#environment_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#name FinspaceKxDataview#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#availability_zone_id FinspaceKxDataview#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.changesetId">changesetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#changeset_id FinspaceKxDataview#changeset_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#description FinspaceKxDataview#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#id FinspaceKxDataview#id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.readWrite">readWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#read_write FinspaceKxDataview#read_write}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.segmentConfigurations">segmentConfigurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>></code> | segment_configurations block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#tags FinspaceKxDataview#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#tags_all FinspaceKxDataview#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoUpdate`<sup>Required</sup> <a name="autoUpdate" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.autoUpdate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#auto_update FinspaceKxDataview#auto_update}.

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.azMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#az_mode FinspaceKxDataview#az_mode}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#database_name FinspaceKxDataview#database_name}.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.environmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#environment_id FinspaceKxDataview#environment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#name FinspaceKxDataview#name}.

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.availabilityZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#availability_zone_id FinspaceKxDataview#availability_zone_id}.

---

##### `changesetId`<sup>Optional</sup> <a name="changesetId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.changesetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#changeset_id FinspaceKxDataview#changeset_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#description FinspaceKxDataview#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#id FinspaceKxDataview#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `readWrite`<sup>Optional</sup> <a name="readWrite" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.readWrite"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#read_write FinspaceKxDataview#read_write}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#region FinspaceKxDataview#region}

---

##### `segmentConfigurations`<sup>Optional</sup> <a name="segmentConfigurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.segmentConfigurations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>>

segment_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#segment_configurations FinspaceKxDataview#segment_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#tags FinspaceKxDataview#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#tags_all FinspaceKxDataview#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#timeouts FinspaceKxDataview#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putSegmentConfigurations">putSegmentConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetAvailabilityZoneId">resetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetChangesetId">resetChangesetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetReadWrite">resetReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetSegmentConfigurations">resetSegmentConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSegmentConfigurations` <a name="putSegmentConfigurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putSegmentConfigurations"></a>

```java
public void putSegmentConfigurations(IResolvable OR java.util.List<FinspaceKxDataviewSegmentConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putSegmentConfigurations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putTimeouts"></a>

```java
public void putTimeouts(FinspaceKxDataviewTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>

---

##### `resetAvailabilityZoneId` <a name="resetAvailabilityZoneId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetAvailabilityZoneId"></a>

```java
public void resetAvailabilityZoneId()
```

##### `resetChangesetId` <a name="resetChangesetId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetChangesetId"></a>

```java
public void resetChangesetId()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetId"></a>

```java
public void resetId()
```

##### `resetReadWrite` <a name="resetReadWrite" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetReadWrite"></a>

```java
public void resetReadWrite()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSegmentConfigurations` <a name="resetSegmentConfigurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetSegmentConfigurations"></a>

```java
public void resetSegmentConfigurations()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FinspaceKxDataview resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_dataview.FinspaceKxDataview;

FinspaceKxDataview.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_dataview.FinspaceKxDataview;

FinspaceKxDataview.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_dataview.FinspaceKxDataview;

FinspaceKxDataview.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_dataview.FinspaceKxDataview;

FinspaceKxDataview.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FinspaceKxDataview.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FinspaceKxDataview resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FinspaceKxDataview to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FinspaceKxDataview that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FinspaceKxDataview to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.createdTimestamp">createdTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lastModifiedTimestamp">lastModifiedTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurations">segmentConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList">FinspaceKxDataviewSegmentConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference">FinspaceKxDataviewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdateInput">autoUpdateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azModeInput">azModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetIdInput">changesetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentIdInput">environmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.readWriteInput">readWriteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurationsInput">segmentConfigurationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdate">autoUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azMode">azMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetId">changesetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.readWrite">readWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.createdTimestamp"></a>

```java
public java.lang.String getCreatedTimestamp();
```

- *Type:* java.lang.String

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="lastModifiedTimestamp" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lastModifiedTimestamp"></a>

```java
public java.lang.String getLastModifiedTimestamp();
```

- *Type:* java.lang.String

---

##### `segmentConfigurations`<sup>Required</sup> <a name="segmentConfigurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurations"></a>

```java
public FinspaceKxDataviewSegmentConfigurationsList getSegmentConfigurations();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList">FinspaceKxDataviewSegmentConfigurationsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeouts"></a>

```java
public FinspaceKxDataviewTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference">FinspaceKxDataviewTimeoutsOutputReference</a>

---

##### `autoUpdateInput`<sup>Optional</sup> <a name="autoUpdateInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdateInput"></a>

```java
public java.lang.Object getAutoUpdateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneIdInput"></a>

```java
public java.lang.String getAvailabilityZoneIdInput();
```

- *Type:* java.lang.String

---

##### `azModeInput`<sup>Optional</sup> <a name="azModeInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azModeInput"></a>

```java
public java.lang.String getAzModeInput();
```

- *Type:* java.lang.String

---

##### `changesetIdInput`<sup>Optional</sup> <a name="changesetIdInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetIdInput"></a>

```java
public java.lang.String getChangesetIdInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentIdInput"></a>

```java
public java.lang.String getEnvironmentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `readWriteInput`<sup>Optional</sup> <a name="readWriteInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.readWriteInput"></a>

```java
public java.lang.Object getReadWriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `segmentConfigurationsInput`<sup>Optional</sup> <a name="segmentConfigurationsInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurationsInput"></a>

```java
public java.lang.Object getSegmentConfigurationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>

---

##### `autoUpdate`<sup>Required</sup> <a name="autoUpdate" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdate"></a>

```java
public java.lang.Object getAutoUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azMode"></a>

```java
public java.lang.String getAzMode();
```

- *Type:* java.lang.String

---

##### `changesetId`<sup>Required</sup> <a name="changesetId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetId"></a>

```java
public java.lang.String getChangesetId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `readWrite`<sup>Required</sup> <a name="readWrite" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.readWrite"></a>

```java
public java.lang.Object getReadWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceKxDataviewConfig <a name="FinspaceKxDataviewConfig" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_dataview.FinspaceKxDataviewConfig;

FinspaceKxDataviewConfig.builder()
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
    .autoUpdate(java.lang.Boolean)
    .autoUpdate(IResolvable)
    .azMode(java.lang.String)
    .databaseName(java.lang.String)
    .environmentId(java.lang.String)
    .name(java.lang.String)
//  .availabilityZoneId(java.lang.String)
//  .changesetId(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .readWrite(java.lang.Boolean)
//  .readWrite(IResolvable)
//  .region(java.lang.String)
//  .segmentConfigurations(IResolvable)
//  .segmentConfigurations(java.util.List<FinspaceKxDataviewSegmentConfigurations>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FinspaceKxDataviewTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.autoUpdate">autoUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#auto_update FinspaceKxDataview#auto_update}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.azMode">azMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#az_mode FinspaceKxDataview#az_mode}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#database_name FinspaceKxDataview#database_name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#environment_id FinspaceKxDataview#environment_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#name FinspaceKxDataview#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#availability_zone_id FinspaceKxDataview#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.changesetId">changesetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#changeset_id FinspaceKxDataview#changeset_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#description FinspaceKxDataview#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#id FinspaceKxDataview#id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.readWrite">readWrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#read_write FinspaceKxDataview#read_write}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.segmentConfigurations">segmentConfigurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>></code> | segment_configurations block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#tags FinspaceKxDataview#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#tags_all FinspaceKxDataview#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoUpdate`<sup>Required</sup> <a name="autoUpdate" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.autoUpdate"></a>

```java
public java.lang.Object getAutoUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#auto_update FinspaceKxDataview#auto_update}.

---

##### `azMode`<sup>Required</sup> <a name="azMode" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.azMode"></a>

```java
public java.lang.String getAzMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#az_mode FinspaceKxDataview#az_mode}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#database_name FinspaceKxDataview#database_name}.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#environment_id FinspaceKxDataview#environment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#name FinspaceKxDataview#name}.

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#availability_zone_id FinspaceKxDataview#availability_zone_id}.

---

##### `changesetId`<sup>Optional</sup> <a name="changesetId" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.changesetId"></a>

```java
public java.lang.String getChangesetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#changeset_id FinspaceKxDataview#changeset_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#description FinspaceKxDataview#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#id FinspaceKxDataview#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `readWrite`<sup>Optional</sup> <a name="readWrite" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.readWrite"></a>

```java
public java.lang.Object getReadWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#read_write FinspaceKxDataview#read_write}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#region FinspaceKxDataview#region}

---

##### `segmentConfigurations`<sup>Optional</sup> <a name="segmentConfigurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.segmentConfigurations"></a>

```java
public java.lang.Object getSegmentConfigurations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>>

segment_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#segment_configurations FinspaceKxDataview#segment_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#tags FinspaceKxDataview#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#tags_all FinspaceKxDataview#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.timeouts"></a>

```java
public FinspaceKxDataviewTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#timeouts FinspaceKxDataview#timeouts}

---

### FinspaceKxDataviewSegmentConfigurations <a name="FinspaceKxDataviewSegmentConfigurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_dataview.FinspaceKxDataviewSegmentConfigurations;

FinspaceKxDataviewSegmentConfigurations.builder()
    .dbPaths(java.util.List<java.lang.String>)
    .volumeName(java.lang.String)
//  .onDemand(java.lang.Boolean)
//  .onDemand(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.dbPaths">dbPaths</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#db_paths FinspaceKxDataview#db_paths}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#volume_name FinspaceKxDataview#volume_name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.onDemand">onDemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#on_demand FinspaceKxDataview#on_demand}. |

---

##### `dbPaths`<sup>Required</sup> <a name="dbPaths" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.dbPaths"></a>

```java
public java.util.List<java.lang.String> getDbPaths();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#db_paths FinspaceKxDataview#db_paths}.

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#volume_name FinspaceKxDataview#volume_name}.

---

##### `onDemand`<sup>Optional</sup> <a name="onDemand" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.onDemand"></a>

```java
public java.lang.Object getOnDemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#on_demand FinspaceKxDataview#on_demand}.

---

### FinspaceKxDataviewTimeouts <a name="FinspaceKxDataviewTimeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_dataview.FinspaceKxDataviewTimeouts;

FinspaceKxDataviewTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#create FinspaceKxDataview#create}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#delete FinspaceKxDataview#delete}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#update FinspaceKxDataview#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#create FinspaceKxDataview#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#delete FinspaceKxDataview#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/finspace_kx_dataview#update FinspaceKxDataview#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceKxDataviewSegmentConfigurationsList <a name="FinspaceKxDataviewSegmentConfigurationsList" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_dataview.FinspaceKxDataviewSegmentConfigurationsList;

new FinspaceKxDataviewSegmentConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.get"></a>

```java
public FinspaceKxDataviewSegmentConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>>

---


### FinspaceKxDataviewSegmentConfigurationsOutputReference <a name="FinspaceKxDataviewSegmentConfigurationsOutputReference" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_dataview.FinspaceKxDataviewSegmentConfigurationsOutputReference;

new FinspaceKxDataviewSegmentConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resetOnDemand">resetOnDemand</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOnDemand` <a name="resetOnDemand" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resetOnDemand"></a>

```java
public void resetOnDemand()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPathsInput">dbPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.onDemandInput">onDemandInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPaths">dbPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.onDemand">onDemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeName">volumeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbPathsInput`<sup>Optional</sup> <a name="dbPathsInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPathsInput"></a>

```java
public java.util.List<java.lang.String> getDbPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onDemandInput`<sup>Optional</sup> <a name="onDemandInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.onDemandInput"></a>

```java
public java.lang.Object getOnDemandInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeNameInput"></a>

```java
public java.lang.String getVolumeNameInput();
```

- *Type:* java.lang.String

---

##### `dbPaths`<sup>Required</sup> <a name="dbPaths" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPaths"></a>

```java
public java.util.List<java.lang.String> getDbPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onDemand`<sup>Required</sup> <a name="onDemand" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.onDemand"></a>

```java
public java.lang.Object getOnDemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeName"></a>

```java
public java.lang.String getVolumeName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>

---


### FinspaceKxDataviewTimeoutsOutputReference <a name="FinspaceKxDataviewTimeoutsOutputReference" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.finspace_kx_dataview.FinspaceKxDataviewTimeoutsOutputReference;

new FinspaceKxDataviewTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>

---



