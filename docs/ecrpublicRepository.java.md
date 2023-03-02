# `ecrpublicRepository` Submodule <a name="`ecrpublicRepository` Submodule" id="@cdktf/provider-aws.ecrpublicRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrpublicRepository <a name="EcrpublicRepository" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository aws_ecrpublic_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecrpublic_repository.EcrpublicRepository;

EcrpublicRepository.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .repositoryName(java.lang.String)
//  .catalogData(EcrpublicRepositoryCatalogData)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EcrpublicRepositoryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.catalogData">catalogData</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | catalog_data block. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#id EcrpublicRepository#id}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags EcrpublicRepository#tags}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.repositoryName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}.

---

##### `catalogData`<sup>Optional</sup> <a name="catalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.catalogData"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

catalog_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#catalog_data EcrpublicRepository#catalog_data}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#id EcrpublicRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags EcrpublicRepository#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#timeouts EcrpublicRepository#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData">putCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetCatalogData">resetCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCatalogData` <a name="putCatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData"></a>

```java
public void putCatalogData(EcrpublicRepositoryCatalogData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putCatalogData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putTimeouts"></a>

```java
public void putTimeouts(EcrpublicRepositoryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a>

---

##### `resetCatalogData` <a name="resetCatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetCatalogData"></a>

```java
public void resetCatalogData()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecrpublic_repository.EcrpublicRepository;

EcrpublicRepository.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecrpublic_repository.EcrpublicRepository;

EcrpublicRepository.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecrpublic_repository.EcrpublicRepository;

EcrpublicRepository.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogData">catalogData</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference">EcrpublicRepositoryCatalogDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.registryId">registryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryUri">repositoryUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference">EcrpublicRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogDataInput">catalogDataInput</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryNameInput">repositoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `catalogData`<sup>Required</sup> <a name="catalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogData"></a>

```java
public EcrpublicRepositoryCatalogDataOutputReference getCatalogData();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference">EcrpublicRepositoryCatalogDataOutputReference</a>

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

---

##### `repositoryUri`<sup>Required</sup> <a name="repositoryUri" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryUri"></a>

```java
public java.lang.String getRepositoryUri();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeouts"></a>

```java
public EcrpublicRepositoryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference">EcrpublicRepositoryTimeoutsOutputReference</a>

---

##### `catalogDataInput`<sup>Optional</sup> <a name="catalogDataInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.catalogDataInput"></a>

```java
public EcrpublicRepositoryCatalogData getCatalogDataInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryNameInput`<sup>Optional</sup> <a name="repositoryNameInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryNameInput"></a>

```java
public java.lang.String getRepositoryNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepository.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcrpublicRepositoryCatalogData <a name="EcrpublicRepositoryCatalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecrpublic_repository.EcrpublicRepositoryCatalogData;

EcrpublicRepositoryCatalogData.builder()
//  .aboutText(java.lang.String)
//  .architectures(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .logoImageBlob(java.lang.String)
//  .operatingSystems(java.util.List<java.lang.String>)
//  .usageText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.aboutText">aboutText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#about_text EcrpublicRepository#about_text}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.architectures">architectures</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#architectures EcrpublicRepository#architectures}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#description EcrpublicRepository#description}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.logoImageBlob">logoImageBlob</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#logo_image_blob EcrpublicRepository#logo_image_blob}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.operatingSystems">operatingSystems</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#operating_systems EcrpublicRepository#operating_systems}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.usageText">usageText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#usage_text EcrpublicRepository#usage_text}. |

---

##### `aboutText`<sup>Optional</sup> <a name="aboutText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.aboutText"></a>

```java
public java.lang.String getAboutText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#about_text EcrpublicRepository#about_text}.

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.architectures"></a>

```java
public java.util.List<java.lang.String> getArchitectures();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#architectures EcrpublicRepository#architectures}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#description EcrpublicRepository#description}.

---

##### `logoImageBlob`<sup>Optional</sup> <a name="logoImageBlob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.logoImageBlob"></a>

```java
public java.lang.String getLogoImageBlob();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#logo_image_blob EcrpublicRepository#logo_image_blob}.

---

##### `operatingSystems`<sup>Optional</sup> <a name="operatingSystems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.operatingSystems"></a>

```java
public java.util.List<java.lang.String> getOperatingSystems();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#operating_systems EcrpublicRepository#operating_systems}.

---

##### `usageText`<sup>Optional</sup> <a name="usageText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData.property.usageText"></a>

```java
public java.lang.String getUsageText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#usage_text EcrpublicRepository#usage_text}.

---

### EcrpublicRepositoryConfig <a name="EcrpublicRepositoryConfig" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecrpublic_repository.EcrpublicRepositoryConfig;

EcrpublicRepositoryConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .repositoryName(java.lang.String)
//  .catalogData(EcrpublicRepositoryCatalogData)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EcrpublicRepositoryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.repositoryName">repositoryName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.catalogData">catalogData</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | catalog_data block. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#id EcrpublicRepository#id}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags EcrpublicRepository#tags}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `repositoryName`<sup>Required</sup> <a name="repositoryName" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.repositoryName"></a>

```java
public java.lang.String getRepositoryName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}.

---

##### `catalogData`<sup>Optional</sup> <a name="catalogData" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.catalogData"></a>

```java
public EcrpublicRepositoryCatalogData getCatalogData();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

catalog_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#catalog_data EcrpublicRepository#catalog_data}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#id EcrpublicRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags EcrpublicRepository#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryConfig.property.timeouts"></a>

```java
public EcrpublicRepositoryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#timeouts EcrpublicRepository#timeouts}

---

### EcrpublicRepositoryTimeouts <a name="EcrpublicRepositoryTimeouts" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecrpublic_repository.EcrpublicRepositoryTimeouts;

EcrpublicRepositoryTimeouts.builder()
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#delete EcrpublicRepository#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecrpublic_repository#delete EcrpublicRepository#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcrpublicRepositoryCatalogDataOutputReference <a name="EcrpublicRepositoryCatalogDataOutputReference" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecrpublic_repository.EcrpublicRepositoryCatalogDataOutputReference;

new EcrpublicRepositoryCatalogDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetAboutText">resetAboutText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetArchitectures">resetArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetLogoImageBlob">resetLogoImageBlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetOperatingSystems">resetOperatingSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetUsageText">resetUsageText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAboutText` <a name="resetAboutText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetAboutText"></a>

```java
public void resetAboutText()
```

##### `resetArchitectures` <a name="resetArchitectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetArchitectures"></a>

```java
public void resetArchitectures()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLogoImageBlob` <a name="resetLogoImageBlob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetLogoImageBlob"></a>

```java
public void resetLogoImageBlob()
```

##### `resetOperatingSystems` <a name="resetOperatingSystems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetOperatingSystems"></a>

```java
public void resetOperatingSystems()
```

##### `resetUsageText` <a name="resetUsageText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.resetUsageText"></a>

```java
public void resetUsageText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutTextInput">aboutTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architecturesInput">architecturesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlobInput">logoImageBlobInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystemsInput">operatingSystemsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageTextInput">usageTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutText">aboutText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architectures">architectures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlob">logoImageBlob</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystems">operatingSystems</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageText">usageText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aboutTextInput`<sup>Optional</sup> <a name="aboutTextInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutTextInput"></a>

```java
public java.lang.String getAboutTextInput();
```

- *Type:* java.lang.String

---

##### `architecturesInput`<sup>Optional</sup> <a name="architecturesInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architecturesInput"></a>

```java
public java.util.List<java.lang.String> getArchitecturesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `logoImageBlobInput`<sup>Optional</sup> <a name="logoImageBlobInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlobInput"></a>

```java
public java.lang.String getLogoImageBlobInput();
```

- *Type:* java.lang.String

---

##### `operatingSystemsInput`<sup>Optional</sup> <a name="operatingSystemsInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystemsInput"></a>

```java
public java.util.List<java.lang.String> getOperatingSystemsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usageTextInput`<sup>Optional</sup> <a name="usageTextInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageTextInput"></a>

```java
public java.lang.String getUsageTextInput();
```

- *Type:* java.lang.String

---

##### `aboutText`<sup>Required</sup> <a name="aboutText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.aboutText"></a>

```java
public java.lang.String getAboutText();
```

- *Type:* java.lang.String

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.architectures"></a>

```java
public java.util.List<java.lang.String> getArchitectures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `logoImageBlob`<sup>Required</sup> <a name="logoImageBlob" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.logoImageBlob"></a>

```java
public java.lang.String getLogoImageBlob();
```

- *Type:* java.lang.String

---

##### `operatingSystems`<sup>Required</sup> <a name="operatingSystems" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.operatingSystems"></a>

```java
public java.util.List<java.lang.String> getOperatingSystems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usageText`<sup>Required</sup> <a name="usageText" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.usageText"></a>

```java
public java.lang.String getUsageText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogDataOutputReference.property.internalValue"></a>

```java
public EcrpublicRepositoryCatalogData getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryCatalogData">EcrpublicRepositoryCatalogData</a>

---


### EcrpublicRepositoryTimeoutsOutputReference <a name="EcrpublicRepositoryTimeoutsOutputReference" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecrpublic_repository.EcrpublicRepositoryTimeoutsOutputReference;

new EcrpublicRepositoryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecrpublicRepository.EcrpublicRepositoryTimeouts">EcrpublicRepositoryTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



