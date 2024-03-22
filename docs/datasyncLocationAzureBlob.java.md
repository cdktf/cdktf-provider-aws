# `datasyncLocationAzureBlob` Submodule <a name="`datasyncLocationAzureBlob` Submodule" id="@cdktf/provider-aws.datasyncLocationAzureBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationAzureBlob <a name="DatasyncLocationAzureBlob" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob aws_datasync_location_azure_blob}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_azure_blob.DatasyncLocationAzureBlob;

DatasyncLocationAzureBlob.Builder.create(Construct scope, java.lang.String id)
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
    .agentArns(java.util.List<java.lang.String>)
    .authenticationType(java.lang.String)
    .containerUrl(java.lang.String)
//  .accessTier(java.lang.String)
//  .blobType(java.lang.String)
//  .id(java.lang.String)
//  .sasConfiguration(DatasyncLocationAzureBlobSasConfiguration)
//  .subdirectory(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#agent_arns DatasyncLocationAzureBlob#agent_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#authentication_type DatasyncLocationAzureBlob#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.containerUrl">containerUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#container_url DatasyncLocationAzureBlob#container_url}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.accessTier">accessTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#access_tier DatasyncLocationAzureBlob#access_tier}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.blobType">blobType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#blob_type DatasyncLocationAzureBlob#blob_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#id DatasyncLocationAzureBlob#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.sasConfiguration">sasConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a></code> | sas_configuration block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#subdirectory DatasyncLocationAzureBlob#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#tags DatasyncLocationAzureBlob#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#tags_all DatasyncLocationAzureBlob#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.agentArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#agent_arns DatasyncLocationAzureBlob#agent_arns}.

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.authenticationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#authentication_type DatasyncLocationAzureBlob#authentication_type}.

---

##### `containerUrl`<sup>Required</sup> <a name="containerUrl" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.containerUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#container_url DatasyncLocationAzureBlob#container_url}.

---

##### `accessTier`<sup>Optional</sup> <a name="accessTier" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.accessTier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#access_tier DatasyncLocationAzureBlob#access_tier}.

---

##### `blobType`<sup>Optional</sup> <a name="blobType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.blobType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#blob_type DatasyncLocationAzureBlob#blob_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#id DatasyncLocationAzureBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sasConfiguration`<sup>Optional</sup> <a name="sasConfiguration" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.sasConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a>

sas_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#sas_configuration DatasyncLocationAzureBlob#sas_configuration}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.subdirectory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#subdirectory DatasyncLocationAzureBlob#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#tags DatasyncLocationAzureBlob#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#tags_all DatasyncLocationAzureBlob#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putSasConfiguration">putSasConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAccessTier">resetAccessTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetBlobType">resetBlobType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetSasConfiguration">resetSasConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSasConfiguration` <a name="putSasConfiguration" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putSasConfiguration"></a>

```java
public void putSasConfiguration(DatasyncLocationAzureBlobSasConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.putSasConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a>

---

##### `resetAccessTier` <a name="resetAccessTier" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetAccessTier"></a>

```java
public void resetAccessTier()
```

##### `resetBlobType` <a name="resetBlobType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetBlobType"></a>

```java
public void resetBlobType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetId"></a>

```java
public void resetId()
```

##### `resetSasConfiguration` <a name="resetSasConfiguration" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetSasConfiguration"></a>

```java
public void resetSasConfiguration()
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetSubdirectory"></a>

```java
public void resetSubdirectory()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatasyncLocationAzureBlob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_azure_blob.DatasyncLocationAzureBlob;

DatasyncLocationAzureBlob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_azure_blob.DatasyncLocationAzureBlob;

DatasyncLocationAzureBlob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_azure_blob.DatasyncLocationAzureBlob;

DatasyncLocationAzureBlob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_azure_blob.DatasyncLocationAzureBlob;

DatasyncLocationAzureBlob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatasyncLocationAzureBlob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatasyncLocationAzureBlob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatasyncLocationAzureBlob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatasyncLocationAzureBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatasyncLocationAzureBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.sasConfiguration">sasConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference">DatasyncLocationAzureBlobSasConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.accessTierInput">accessTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.agentArnsInput">agentArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.blobTypeInput">blobTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.containerUrlInput">containerUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.sasConfigurationInput">sasConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.subdirectoryInput">subdirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.accessTier">accessTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.blobType">blobType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.containerUrl">containerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `sasConfiguration`<sup>Required</sup> <a name="sasConfiguration" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.sasConfiguration"></a>

```java
public DatasyncLocationAzureBlobSasConfigurationOutputReference getSasConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference">DatasyncLocationAzureBlobSasConfigurationOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `accessTierInput`<sup>Optional</sup> <a name="accessTierInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.accessTierInput"></a>

```java
public java.lang.String getAccessTierInput();
```

- *Type:* java.lang.String

---

##### `agentArnsInput`<sup>Optional</sup> <a name="agentArnsInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.agentArnsInput"></a>

```java
public java.util.List<java.lang.String> getAgentArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `blobTypeInput`<sup>Optional</sup> <a name="blobTypeInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.blobTypeInput"></a>

```java
public java.lang.String getBlobTypeInput();
```

- *Type:* java.lang.String

---

##### `containerUrlInput`<sup>Optional</sup> <a name="containerUrlInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.containerUrlInput"></a>

```java
public java.lang.String getContainerUrlInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `sasConfigurationInput`<sup>Optional</sup> <a name="sasConfigurationInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.sasConfigurationInput"></a>

```java
public DatasyncLocationAzureBlobSasConfiguration getSasConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a>

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.subdirectoryInput"></a>

```java
public java.lang.String getSubdirectoryInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `accessTier`<sup>Required</sup> <a name="accessTier" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.accessTier"></a>

```java
public java.lang.String getAccessTier();
```

- *Type:* java.lang.String

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.agentArns"></a>

```java
public java.util.List<java.lang.String> getAgentArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `blobType`<sup>Required</sup> <a name="blobType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.blobType"></a>

```java
public java.lang.String getBlobType();
```

- *Type:* java.lang.String

---

##### `containerUrl`<sup>Required</sup> <a name="containerUrl" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.containerUrl"></a>

```java
public java.lang.String getContainerUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationAzureBlobConfig <a name="DatasyncLocationAzureBlobConfig" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_azure_blob.DatasyncLocationAzureBlobConfig;

DatasyncLocationAzureBlobConfig.builder()
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
    .agentArns(java.util.List<java.lang.String>)
    .authenticationType(java.lang.String)
    .containerUrl(java.lang.String)
//  .accessTier(java.lang.String)
//  .blobType(java.lang.String)
//  .id(java.lang.String)
//  .sasConfiguration(DatasyncLocationAzureBlobSasConfiguration)
//  .subdirectory(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.agentArns">agentArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#agent_arns DatasyncLocationAzureBlob#agent_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#authentication_type DatasyncLocationAzureBlob#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.containerUrl">containerUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#container_url DatasyncLocationAzureBlob#container_url}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.accessTier">accessTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#access_tier DatasyncLocationAzureBlob#access_tier}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.blobType">blobType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#blob_type DatasyncLocationAzureBlob#blob_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#id DatasyncLocationAzureBlob#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.sasConfiguration">sasConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a></code> | sas_configuration block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.subdirectory">subdirectory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#subdirectory DatasyncLocationAzureBlob#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#tags DatasyncLocationAzureBlob#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#tags_all DatasyncLocationAzureBlob#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.agentArns"></a>

```java
public java.util.List<java.lang.String> getAgentArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#agent_arns DatasyncLocationAzureBlob#agent_arns}.

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#authentication_type DatasyncLocationAzureBlob#authentication_type}.

---

##### `containerUrl`<sup>Required</sup> <a name="containerUrl" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.containerUrl"></a>

```java
public java.lang.String getContainerUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#container_url DatasyncLocationAzureBlob#container_url}.

---

##### `accessTier`<sup>Optional</sup> <a name="accessTier" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.accessTier"></a>

```java
public java.lang.String getAccessTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#access_tier DatasyncLocationAzureBlob#access_tier}.

---

##### `blobType`<sup>Optional</sup> <a name="blobType" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.blobType"></a>

```java
public java.lang.String getBlobType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#blob_type DatasyncLocationAzureBlob#blob_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#id DatasyncLocationAzureBlob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sasConfiguration`<sup>Optional</sup> <a name="sasConfiguration" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.sasConfiguration"></a>

```java
public DatasyncLocationAzureBlobSasConfiguration getSasConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a>

sas_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#sas_configuration DatasyncLocationAzureBlob#sas_configuration}

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.subdirectory"></a>

```java
public java.lang.String getSubdirectory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#subdirectory DatasyncLocationAzureBlob#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#tags DatasyncLocationAzureBlob#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#tags_all DatasyncLocationAzureBlob#tags_all}.

---

### DatasyncLocationAzureBlobSasConfiguration <a name="DatasyncLocationAzureBlobSasConfiguration" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_azure_blob.DatasyncLocationAzureBlobSasConfiguration;

DatasyncLocationAzureBlobSasConfiguration.builder()
    .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration.property.token">token</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#token DatasyncLocationAzureBlob#token}. |

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/datasync_location_azure_blob#token DatasyncLocationAzureBlob#token}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationAzureBlobSasConfigurationOutputReference <a name="DatasyncLocationAzureBlobSasConfigurationOutputReference" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.datasync_location_azure_blob.DatasyncLocationAzureBlobSasConfigurationOutputReference;

new DatasyncLocationAzureBlobSasConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfigurationOutputReference.property.internalValue"></a>

```java
public DatasyncLocationAzureBlobSasConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationAzureBlob.DatasyncLocationAzureBlobSasConfiguration">DatasyncLocationAzureBlobSasConfiguration</a>

---



