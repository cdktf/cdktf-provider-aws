# `cloudhsmV2Cluster` Submodule <a name="`cloudhsmV2Cluster` Submodule" id="@cdktf/provider-aws.cloudhsmV2Cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudhsmV2Cluster <a name="CloudhsmV2Cluster" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster aws_cloudhsm_v2_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudhsm_v2_cluster.CloudhsmV2Cluster;

CloudhsmV2Cluster.Builder.create(Construct scope, java.lang.String id)
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
    .hsmType(java.lang.String)
    .subnetIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .mode(java.lang.String)
//  .region(java.lang.String)
//  .sourceBackupIdentifier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CloudhsmV2ClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.hsmType">hsmType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#hsm_type CloudhsmV2Cluster#hsm_type}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#subnet_ids CloudhsmV2Cluster#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#id CloudhsmV2Cluster#id}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#mode CloudhsmV2Cluster#mode}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.sourceBackupIdentifier">sourceBackupIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#source_backup_identifier CloudhsmV2Cluster#source_backup_identifier}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#tags CloudhsmV2Cluster#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#tags_all CloudhsmV2Cluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hsmType`<sup>Required</sup> <a name="hsmType" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.hsmType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#hsm_type CloudhsmV2Cluster#hsm_type}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#subnet_ids CloudhsmV2Cluster#subnet_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#id CloudhsmV2Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#mode CloudhsmV2Cluster#mode}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#region CloudhsmV2Cluster#region}

---

##### `sourceBackupIdentifier`<sup>Optional</sup> <a name="sourceBackupIdentifier" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.sourceBackupIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#source_backup_identifier CloudhsmV2Cluster#source_backup_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#tags CloudhsmV2Cluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#tags_all CloudhsmV2Cluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#timeouts CloudhsmV2Cluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetSourceBackupIdentifier">resetSourceBackupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.putTimeouts"></a>

```java
public void putTimeouts(CloudhsmV2ClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetId"></a>

```java
public void resetId()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetMode"></a>

```java
public void resetMode()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSourceBackupIdentifier` <a name="resetSourceBackupIdentifier" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetSourceBackupIdentifier"></a>

```java
public void resetSourceBackupIdentifier()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudhsmV2Cluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudhsm_v2_cluster.CloudhsmV2Cluster;

CloudhsmV2Cluster.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudhsm_v2_cluster.CloudhsmV2Cluster;

CloudhsmV2Cluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudhsm_v2_cluster.CloudhsmV2Cluster;

CloudhsmV2Cluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudhsm_v2_cluster.CloudhsmV2Cluster;

CloudhsmV2Cluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudhsmV2Cluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudhsmV2Cluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudhsmV2Cluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudhsmV2Cluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudhsmV2Cluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.clusterCertificates">clusterCertificates</a></code> | <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList">CloudhsmV2ClusterClusterCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.clusterState">clusterState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference">CloudhsmV2ClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.hsmTypeInput">hsmTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.sourceBackupIdentifierInput">sourceBackupIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.hsmType">hsmType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.sourceBackupIdentifier">sourceBackupIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterCertificates`<sup>Required</sup> <a name="clusterCertificates" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.clusterCertificates"></a>

```java
public CloudhsmV2ClusterClusterCertificatesList getClusterCertificates();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList">CloudhsmV2ClusterClusterCertificatesList</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `clusterState`<sup>Required</sup> <a name="clusterState" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.clusterState"></a>

```java
public java.lang.String getClusterState();
```

- *Type:* java.lang.String

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.timeouts"></a>

```java
public CloudhsmV2ClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference">CloudhsmV2ClusterTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `hsmTypeInput`<sup>Optional</sup> <a name="hsmTypeInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.hsmTypeInput"></a>

```java
public java.lang.String getHsmTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sourceBackupIdentifierInput`<sup>Optional</sup> <a name="sourceBackupIdentifierInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.sourceBackupIdentifierInput"></a>

```java
public java.lang.String getSourceBackupIdentifierInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a>

---

##### `hsmType`<sup>Required</sup> <a name="hsmType" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.hsmType"></a>

```java
public java.lang.String getHsmType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sourceBackupIdentifier`<sup>Required</sup> <a name="sourceBackupIdentifier" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.sourceBackupIdentifier"></a>

```java
public java.lang.String getSourceBackupIdentifier();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2Cluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudhsmV2ClusterClusterCertificates <a name="CloudhsmV2ClusterClusterCertificates" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudhsm_v2_cluster.CloudhsmV2ClusterClusterCertificates;

CloudhsmV2ClusterClusterCertificates.builder()
    .build();
```


### CloudhsmV2ClusterConfig <a name="CloudhsmV2ClusterConfig" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudhsm_v2_cluster.CloudhsmV2ClusterConfig;

CloudhsmV2ClusterConfig.builder()
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
    .hsmType(java.lang.String)
    .subnetIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .mode(java.lang.String)
//  .region(java.lang.String)
//  .sourceBackupIdentifier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(CloudhsmV2ClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.hsmType">hsmType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#hsm_type CloudhsmV2Cluster#hsm_type}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#subnet_ids CloudhsmV2Cluster#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#id CloudhsmV2Cluster#id}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#mode CloudhsmV2Cluster#mode}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.sourceBackupIdentifier">sourceBackupIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#source_backup_identifier CloudhsmV2Cluster#source_backup_identifier}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#tags CloudhsmV2Cluster#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#tags_all CloudhsmV2Cluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hsmType`<sup>Required</sup> <a name="hsmType" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.hsmType"></a>

```java
public java.lang.String getHsmType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#hsm_type CloudhsmV2Cluster#hsm_type}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#subnet_ids CloudhsmV2Cluster#subnet_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#id CloudhsmV2Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#mode CloudhsmV2Cluster#mode}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#region CloudhsmV2Cluster#region}

---

##### `sourceBackupIdentifier`<sup>Optional</sup> <a name="sourceBackupIdentifier" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.sourceBackupIdentifier"></a>

```java
public java.lang.String getSourceBackupIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#source_backup_identifier CloudhsmV2Cluster#source_backup_identifier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#tags CloudhsmV2Cluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#tags_all CloudhsmV2Cluster#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterConfig.property.timeouts"></a>

```java
public CloudhsmV2ClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#timeouts CloudhsmV2Cluster#timeouts}

---

### CloudhsmV2ClusterTimeouts <a name="CloudhsmV2ClusterTimeouts" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudhsm_v2_cluster.CloudhsmV2ClusterTimeouts;

CloudhsmV2ClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#create CloudhsmV2Cluster#create}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#delete CloudhsmV2Cluster#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#update CloudhsmV2Cluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#create CloudhsmV2Cluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#delete CloudhsmV2Cluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudhsm_v2_cluster#update CloudhsmV2Cluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudhsmV2ClusterClusterCertificatesList <a name="CloudhsmV2ClusterClusterCertificatesList" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudhsm_v2_cluster.CloudhsmV2ClusterClusterCertificatesList;

new CloudhsmV2ClusterClusterCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.get"></a>

```java
public CloudhsmV2ClusterClusterCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudhsmV2ClusterClusterCertificatesOutputReference <a name="CloudhsmV2ClusterClusterCertificatesOutputReference" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudhsm_v2_cluster.CloudhsmV2ClusterClusterCertificatesOutputReference;

new CloudhsmV2ClusterClusterCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.awsHardwareCertificate">awsHardwareCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCertificate">clusterCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCsr">clusterCsr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.hsmCertificate">hsmCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.manufacturerHardwareCertificate">manufacturerHardwareCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificates">CloudhsmV2ClusterClusterCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsHardwareCertificate`<sup>Required</sup> <a name="awsHardwareCertificate" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.awsHardwareCertificate"></a>

```java
public java.lang.String getAwsHardwareCertificate();
```

- *Type:* java.lang.String

---

##### `clusterCertificate`<sup>Required</sup> <a name="clusterCertificate" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCertificate"></a>

```java
public java.lang.String getClusterCertificate();
```

- *Type:* java.lang.String

---

##### `clusterCsr`<sup>Required</sup> <a name="clusterCsr" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCsr"></a>

```java
public java.lang.String getClusterCsr();
```

- *Type:* java.lang.String

---

##### `hsmCertificate`<sup>Required</sup> <a name="hsmCertificate" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.hsmCertificate"></a>

```java
public java.lang.String getHsmCertificate();
```

- *Type:* java.lang.String

---

##### `manufacturerHardwareCertificate`<sup>Required</sup> <a name="manufacturerHardwareCertificate" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.manufacturerHardwareCertificate"></a>

```java
public java.lang.String getManufacturerHardwareCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificatesOutputReference.property.internalValue"></a>

```java
public CloudhsmV2ClusterClusterCertificates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterClusterCertificates">CloudhsmV2ClusterClusterCertificates</a>

---


### CloudhsmV2ClusterTimeoutsOutputReference <a name="CloudhsmV2ClusterTimeoutsOutputReference" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudhsm_v2_cluster.CloudhsmV2ClusterTimeoutsOutputReference;

new CloudhsmV2ClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudhsmV2Cluster.CloudhsmV2ClusterTimeouts">CloudhsmV2ClusterTimeouts</a>

---



