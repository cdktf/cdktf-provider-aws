# `kendraQuerySuggestionsBlockList` Submodule <a name="`kendraQuerySuggestionsBlockList` Submodule" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraQuerySuggestionsBlockList <a name="KendraQuerySuggestionsBlockList" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list aws_kendra_query_suggestions_block_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockList;

KendraQuerySuggestionsBlockList.Builder.create(Construct scope, java.lang.String id)
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
    .indexId(java.lang.String)
    .name(java.lang.String)
    .roleArn(java.lang.String)
    .sourceS3Path(KendraQuerySuggestionsBlockListSourceS3Path)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KendraQuerySuggestionsBlockListTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.indexId">indexId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#index_id KendraQuerySuggestionsBlockList#index_id}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#name KendraQuerySuggestionsBlockList#name}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#role_arn KendraQuerySuggestionsBlockList#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.sourceS3Path">sourceS3Path</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a></code> | source_s3_path block. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#description KendraQuerySuggestionsBlockList#description}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#id KendraQuerySuggestionsBlockList#id}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags KendraQuerySuggestionsBlockList#tags}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags_all KendraQuerySuggestionsBlockList#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.indexId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#index_id KendraQuerySuggestionsBlockList#index_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#name KendraQuerySuggestionsBlockList#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#role_arn KendraQuerySuggestionsBlockList#role_arn}.

---

##### `sourceS3Path`<sup>Required</sup> <a name="sourceS3Path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.sourceS3Path"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

source_s3_path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#source_s3_path KendraQuerySuggestionsBlockList#source_s3_path}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#description KendraQuerySuggestionsBlockList#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#id KendraQuerySuggestionsBlockList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags KendraQuerySuggestionsBlockList#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags_all KendraQuerySuggestionsBlockList#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#timeouts KendraQuerySuggestionsBlockList#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putSourceS3Path">putSourceS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSourceS3Path` <a name="putSourceS3Path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putSourceS3Path"></a>

```java
public void putSourceS3Path(KendraQuerySuggestionsBlockListSourceS3Path value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putSourceS3Path.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putTimeouts"></a>

```java
public void putTimeouts(KendraQuerySuggestionsBlockListTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockList;

KendraQuerySuggestionsBlockList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockList;

KendraQuerySuggestionsBlockList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockList;

KendraQuerySuggestionsBlockList.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId">querySuggestionsBlockListId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3Path">sourceS3Path</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference">KendraQuerySuggestionsBlockListSourceS3PathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference">KendraQuerySuggestionsBlockListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexIdInput">indexIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3PathInput">sourceS3PathInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexId">indexId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `querySuggestionsBlockListId`<sup>Required</sup> <a name="querySuggestionsBlockListId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId"></a>

```java
public java.lang.String getQuerySuggestionsBlockListId();
```

- *Type:* java.lang.String

---

##### `sourceS3Path`<sup>Required</sup> <a name="sourceS3Path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3Path"></a>

```java
public KendraQuerySuggestionsBlockListSourceS3PathOutputReference getSourceS3Path();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference">KendraQuerySuggestionsBlockListSourceS3PathOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.timeouts"></a>

```java
public KendraQuerySuggestionsBlockListTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference">KendraQuerySuggestionsBlockListTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexIdInput"></a>

```java
public java.lang.String getIndexIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `sourceS3PathInput`<sup>Optional</sup> <a name="sourceS3PathInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.sourceS3PathInput"></a>

```java
public KendraQuerySuggestionsBlockListSourceS3Path getSourceS3PathInput();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KendraQuerySuggestionsBlockListConfig <a name="KendraQuerySuggestionsBlockListConfig" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockListConfig;

KendraQuerySuggestionsBlockListConfig.builder()
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
    .indexId(java.lang.String)
    .name(java.lang.String)
    .roleArn(java.lang.String)
    .sourceS3Path(KendraQuerySuggestionsBlockListSourceS3Path)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(KendraQuerySuggestionsBlockListTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.indexId">indexId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#index_id KendraQuerySuggestionsBlockList#index_id}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#name KendraQuerySuggestionsBlockList#name}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#role_arn KendraQuerySuggestionsBlockList#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.sourceS3Path">sourceS3Path</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a></code> | source_s3_path block. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#description KendraQuerySuggestionsBlockList#description}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#id KendraQuerySuggestionsBlockList#id}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags KendraQuerySuggestionsBlockList#tags}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags_all KendraQuerySuggestionsBlockList#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.indexId"></a>

```java
public java.lang.String getIndexId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#index_id KendraQuerySuggestionsBlockList#index_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#name KendraQuerySuggestionsBlockList#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#role_arn KendraQuerySuggestionsBlockList#role_arn}.

---

##### `sourceS3Path`<sup>Required</sup> <a name="sourceS3Path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.sourceS3Path"></a>

```java
public KendraQuerySuggestionsBlockListSourceS3Path getSourceS3Path();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

source_s3_path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#source_s3_path KendraQuerySuggestionsBlockList#source_s3_path}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#description KendraQuerySuggestionsBlockList#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#id KendraQuerySuggestionsBlockList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags KendraQuerySuggestionsBlockList#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#tags_all KendraQuerySuggestionsBlockList#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListConfig.property.timeouts"></a>

```java
public KendraQuerySuggestionsBlockListTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#timeouts KendraQuerySuggestionsBlockList#timeouts}

---

### KendraQuerySuggestionsBlockListSourceS3Path <a name="KendraQuerySuggestionsBlockListSourceS3Path" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockListSourceS3Path;

KendraQuerySuggestionsBlockListSourceS3Path.builder()
    .bucket(java.lang.String)
    .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#bucket KendraQuerySuggestionsBlockList#bucket}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#key KendraQuerySuggestionsBlockList#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#bucket KendraQuerySuggestionsBlockList#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#key KendraQuerySuggestionsBlockList#key}.

---

### KendraQuerySuggestionsBlockListTimeouts <a name="KendraQuerySuggestionsBlockListTimeouts" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockListTimeouts;

KendraQuerySuggestionsBlockListTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#create KendraQuerySuggestionsBlockList#create}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#delete KendraQuerySuggestionsBlockList#delete}. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#update KendraQuerySuggestionsBlockList#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#create KendraQuerySuggestionsBlockList#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#delete KendraQuerySuggestionsBlockList#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_query_suggestions_block_list#update KendraQuerySuggestionsBlockList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KendraQuerySuggestionsBlockListSourceS3PathOutputReference <a name="KendraQuerySuggestionsBlockListSourceS3PathOutputReference" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockListSourceS3PathOutputReference;

new KendraQuerySuggestionsBlockListSourceS3PathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue"></a>

```java
public KendraQuerySuggestionsBlockListSourceS3Path getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListSourceS3Path">KendraQuerySuggestionsBlockListSourceS3Path</a>

---


### KendraQuerySuggestionsBlockListTimeoutsOutputReference <a name="KendraQuerySuggestionsBlockListTimeoutsOutputReference" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.kendra_query_suggestions_block_list.KendraQuerySuggestionsBlockListTimeoutsOutputReference;

new KendraQuerySuggestionsBlockListTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.kendraQuerySuggestionsBlockList.KendraQuerySuggestionsBlockListTimeouts">KendraQuerySuggestionsBlockListTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



