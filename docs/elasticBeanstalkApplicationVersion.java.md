# `elasticBeanstalkApplicationVersion` Submodule <a name="`elasticBeanstalkApplicationVersion` Submodule" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticBeanstalkApplicationVersion <a name="ElasticBeanstalkApplicationVersion" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version aws_elastic_beanstalk_application_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastic_beanstalk_application_version.ElasticBeanstalkApplicationVersion;

ElasticBeanstalkApplicationVersion.Builder.create(Construct scope, java.lang.String id)
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
    .application(java.lang.String)
    .bucket(java.lang.String)
    .key(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.application">application</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#application ElasticBeanstalkApplicationVersion#application}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#bucket ElasticBeanstalkApplicationVersion#bucket}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#key ElasticBeanstalkApplicationVersion#key}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#name ElasticBeanstalkApplicationVersion#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#description ElasticBeanstalkApplicationVersion#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#force_delete ElasticBeanstalkApplicationVersion#force_delete}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#id ElasticBeanstalkApplicationVersion#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#tags ElasticBeanstalkApplicationVersion#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#tags_all ElasticBeanstalkApplicationVersion#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.application"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#application ElasticBeanstalkApplicationVersion#application}.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#bucket ElasticBeanstalkApplicationVersion#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#key ElasticBeanstalkApplicationVersion#key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#name ElasticBeanstalkApplicationVersion#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#description ElasticBeanstalkApplicationVersion#description}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.forceDelete"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#force_delete ElasticBeanstalkApplicationVersion#force_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#id ElasticBeanstalkApplicationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#tags ElasticBeanstalkApplicationVersion#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#tags_all ElasticBeanstalkApplicationVersion#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetForceDelete` <a name="resetForceDelete" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetForceDelete"></a>

```java
public void resetForceDelete()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastic_beanstalk_application_version.ElasticBeanstalkApplicationVersion;

ElasticBeanstalkApplicationVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastic_beanstalk_application_version.ElasticBeanstalkApplicationVersion;

ElasticBeanstalkApplicationVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastic_beanstalk_application_version.ElasticBeanstalkApplicationVersion;

ElasticBeanstalkApplicationVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.applicationInput">applicationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forceDeleteInput">forceDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.application">application</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `applicationInput`<sup>Optional</sup> <a name="applicationInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.applicationInput"></a>

```java
public java.lang.String getApplicationInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forceDeleteInput"></a>

```java
public java.lang.Object getForceDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.application"></a>

```java
public java.lang.String getApplication();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkApplicationVersionConfig <a name="ElasticBeanstalkApplicationVersionConfig" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elastic_beanstalk_application_version.ElasticBeanstalkApplicationVersionConfig;

ElasticBeanstalkApplicationVersionConfig.builder()
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
    .application(java.lang.String)
    .bucket(java.lang.String)
    .key(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .forceDelete(java.lang.Boolean)
//  .forceDelete(IResolvable)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.application">application</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#application ElasticBeanstalkApplicationVersion#application}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#bucket ElasticBeanstalkApplicationVersion#bucket}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#key ElasticBeanstalkApplicationVersion#key}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#name ElasticBeanstalkApplicationVersion#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#description ElasticBeanstalkApplicationVersion#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.forceDelete">forceDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#force_delete ElasticBeanstalkApplicationVersion#force_delete}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#id ElasticBeanstalkApplicationVersion#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#tags ElasticBeanstalkApplicationVersion#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#tags_all ElasticBeanstalkApplicationVersion#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.application"></a>

```java
public java.lang.String getApplication();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#application ElasticBeanstalkApplicationVersion#application}.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#bucket ElasticBeanstalkApplicationVersion#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#key ElasticBeanstalkApplicationVersion#key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#name ElasticBeanstalkApplicationVersion#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#description ElasticBeanstalkApplicationVersion#description}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.forceDelete"></a>

```java
public java.lang.Object getForceDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#force_delete ElasticBeanstalkApplicationVersion#force_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#id ElasticBeanstalkApplicationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#tags ElasticBeanstalkApplicationVersion#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.elasticBeanstalkApplicationVersion.ElasticBeanstalkApplicationVersionConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version#tags_all ElasticBeanstalkApplicationVersion#tags_all}.

---



