# `emrcontainersJobTemplate` Submodule <a name="`emrcontainersJobTemplate` Submodule" id="@cdktf/provider-aws.emrcontainersJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrcontainersJobTemplate <a name="EmrcontainersJobTemplate" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template aws_emrcontainers_job_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplate;

EmrcontainersJobTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .jobTemplateData(EmrcontainersJobTemplateJobTemplateData)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EmrcontainersJobTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.jobTemplateData">jobTemplateData</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a></code> | job_template_data block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#name EmrcontainersJobTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#id EmrcontainersJobTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#kms_key_arn EmrcontainersJobTemplate#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#tags EmrcontainersJobTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#tags_all EmrcontainersJobTemplate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts">EmrcontainersJobTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jobTemplateData`<sup>Required</sup> <a name="jobTemplateData" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.jobTemplateData"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a>

job_template_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#job_template_data EmrcontainersJobTemplate#job_template_data}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#name EmrcontainersJobTemplate#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#id EmrcontainersJobTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#kms_key_arn EmrcontainersJobTemplate#kms_key_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#tags EmrcontainersJobTemplate#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#tags_all EmrcontainersJobTemplate#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts">EmrcontainersJobTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#timeouts EmrcontainersJobTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putJobTemplateData">putJobTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putJobTemplateData` <a name="putJobTemplateData" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putJobTemplateData"></a>

```java
public void putJobTemplateData(EmrcontainersJobTemplateJobTemplateData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putJobTemplateData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putTimeouts"></a>

```java
public void putTimeouts(EmrcontainersJobTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts">EmrcontainersJobTemplateTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EmrcontainersJobTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplate;

EmrcontainersJobTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplate;

EmrcontainersJobTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplate;

EmrcontainersJobTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplate;

EmrcontainersJobTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EmrcontainersJobTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EmrcontainersJobTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EmrcontainersJobTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EmrcontainersJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EmrcontainersJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.jobTemplateData">jobTemplateData</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference">EmrcontainersJobTemplateJobTemplateDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference">EmrcontainersJobTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.jobTemplateDataInput">jobTemplateDataInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts">EmrcontainersJobTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `jobTemplateData`<sup>Required</sup> <a name="jobTemplateData" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.jobTemplateData"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataOutputReference getJobTemplateData();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference">EmrcontainersJobTemplateJobTemplateDataOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.timeouts"></a>

```java
public EmrcontainersJobTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference">EmrcontainersJobTemplateTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jobTemplateDataInput`<sup>Optional</sup> <a name="jobTemplateDataInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.jobTemplateDataInput"></a>

```java
public EmrcontainersJobTemplateJobTemplateData getJobTemplateDataInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts">EmrcontainersJobTemplateTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EmrcontainersJobTemplateConfig <a name="EmrcontainersJobTemplateConfig" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateConfig;

EmrcontainersJobTemplateConfig.builder()
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
    .jobTemplateData(EmrcontainersJobTemplateJobTemplateData)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(EmrcontainersJobTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.jobTemplateData">jobTemplateData</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a></code> | job_template_data block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#name EmrcontainersJobTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#id EmrcontainersJobTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#kms_key_arn EmrcontainersJobTemplate#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#tags EmrcontainersJobTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#tags_all EmrcontainersJobTemplate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts">EmrcontainersJobTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jobTemplateData`<sup>Required</sup> <a name="jobTemplateData" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.jobTemplateData"></a>

```java
public EmrcontainersJobTemplateJobTemplateData getJobTemplateData();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a>

job_template_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#job_template_data EmrcontainersJobTemplate#job_template_data}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#name EmrcontainersJobTemplate#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#id EmrcontainersJobTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#kms_key_arn EmrcontainersJobTemplate#kms_key_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#tags EmrcontainersJobTemplate#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#tags_all EmrcontainersJobTemplate#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.timeouts"></a>

```java
public EmrcontainersJobTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts">EmrcontainersJobTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#timeouts EmrcontainersJobTemplate#timeouts}

---

### EmrcontainersJobTemplateJobTemplateData <a name="EmrcontainersJobTemplateJobTemplateData" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateData;

EmrcontainersJobTemplateJobTemplateData.builder()
    .executionRoleArn(java.lang.String)
    .jobDriver(EmrcontainersJobTemplateJobTemplateDataJobDriver)
    .releaseLabel(java.lang.String)
//  .configurationOverrides(EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides)
//  .jobTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#execution_role_arn EmrcontainersJobTemplate#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.jobDriver">jobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a></code> | job_driver block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.releaseLabel">releaseLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#release_label EmrcontainersJobTemplate#release_label}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.configurationOverrides">configurationOverrides</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a></code> | configuration_overrides block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.jobTags">jobTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#job_tags EmrcontainersJobTemplate#job_tags}. |

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#execution_role_arn EmrcontainersJobTemplate#execution_role_arn}.

---

##### `jobDriver`<sup>Required</sup> <a name="jobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.jobDriver"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataJobDriver getJobDriver();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a>

job_driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#job_driver EmrcontainersJobTemplate#job_driver}

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.releaseLabel"></a>

```java
public java.lang.String getReleaseLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#release_label EmrcontainersJobTemplate#release_label}.

---

##### `configurationOverrides`<sup>Optional</sup> <a name="configurationOverrides" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.configurationOverrides"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides getConfigurationOverrides();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a>

configuration_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#configuration_overrides EmrcontainersJobTemplate#configuration_overrides}

---

##### `jobTags`<sup>Optional</sup> <a name="jobTags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.jobTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getJobTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#job_tags EmrcontainersJobTemplate#job_tags}.

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides;

EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.builder()
//  .applicationConfiguration(IResolvable)
//  .applicationConfiguration(java.util.List<EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration>)
//  .monitoringConfiguration(EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.property.applicationConfiguration">applicationConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration</a>></code> | application_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a></code> | monitoring_configuration block. |

---

##### `applicationConfiguration`<sup>Optional</sup> <a name="applicationConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.property.applicationConfiguration"></a>

```java
public java.lang.Object getApplicationConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration</a>>

application_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#application_configuration EmrcontainersJobTemplate#application_configuration}

---

##### `monitoringConfiguration`<sup>Optional</sup> <a name="monitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.property.monitoringConfiguration"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration getMonitoringConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a>

monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#monitoring_configuration EmrcontainersJobTemplate#monitoring_configuration}

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration;

EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.builder()
    .classification(java.lang.String)
//  .configurations(IResolvable)
//  .configurations(java.util.List<EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations>)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.classification">classification</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.configurations">configurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations</a>></code> | configurations block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}. |

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}.

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.configurations"></a>

```java
public java.lang.Object getConfigurations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations</a>>

configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#configurations EmrcontainersJobTemplate#configurations}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}.

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations;

EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.builder()
//  .classification(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.property.classification">classification</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}. |

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}.

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration;

EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.builder()
//  .cloudWatchMonitoringConfiguration(EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration)
//  .persistentAppUi(java.lang.String)
//  .s3MonitoringConfiguration(EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.cloudWatchMonitoringConfiguration">cloudWatchMonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a></code> | cloud_watch_monitoring_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.persistentAppUi">persistentAppUi</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#persistent_app_ui EmrcontainersJobTemplate#persistent_app_ui}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.s3MonitoringConfiguration">s3MonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a></code> | s3_monitoring_configuration block. |

---

##### `cloudWatchMonitoringConfiguration`<sup>Optional</sup> <a name="cloudWatchMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.cloudWatchMonitoringConfiguration"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration getCloudWatchMonitoringConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a>

cloud_watch_monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#cloud_watch_monitoring_configuration EmrcontainersJobTemplate#cloud_watch_monitoring_configuration}

---

##### `persistentAppUi`<sup>Optional</sup> <a name="persistentAppUi" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.persistentAppUi"></a>

```java
public java.lang.String getPersistentAppUi();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#persistent_app_ui EmrcontainersJobTemplate#persistent_app_ui}.

---

##### `s3MonitoringConfiguration`<sup>Optional</sup> <a name="s3MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.s3MonitoringConfiguration"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration getS3MonitoringConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a>

s3_monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#s3_monitoring_configuration EmrcontainersJobTemplate#s3_monitoring_configuration}

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration;

EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.builder()
    .logGroupName(java.lang.String)
//  .logStreamNamePrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#log_group_name EmrcontainersJobTemplate#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.property.logStreamNamePrefix">logStreamNamePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#log_stream_name_prefix EmrcontainersJobTemplate#log_stream_name_prefix}. |

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#log_group_name EmrcontainersJobTemplate#log_group_name}.

---

##### `logStreamNamePrefix`<sup>Optional</sup> <a name="logStreamNamePrefix" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.property.logStreamNamePrefix"></a>

```java
public java.lang.String getLogStreamNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#log_stream_name_prefix EmrcontainersJobTemplate#log_stream_name_prefix}.

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration;

EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration.builder()
    .logUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration.property.logUri">logUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#log_uri EmrcontainersJobTemplate#log_uri}. |

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration.property.logUri"></a>

```java
public java.lang.String getLogUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#log_uri EmrcontainersJobTemplate#log_uri}.

---

### EmrcontainersJobTemplateJobTemplateDataJobDriver <a name="EmrcontainersJobTemplateJobTemplateDataJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataJobDriver;

EmrcontainersJobTemplateJobTemplateDataJobDriver.builder()
//  .sparkSqlJobDriver(EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver)
//  .sparkSubmitJobDriver(EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver.property.sparkSqlJobDriver">sparkSqlJobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a></code> | spark_sql_job_driver block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver.property.sparkSubmitJobDriver">sparkSubmitJobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a></code> | spark_submit_job_driver block. |

---

##### `sparkSqlJobDriver`<sup>Optional</sup> <a name="sparkSqlJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver.property.sparkSqlJobDriver"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver getSparkSqlJobDriver();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a>

spark_sql_job_driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#spark_sql_job_driver EmrcontainersJobTemplate#spark_sql_job_driver}

---

##### `sparkSubmitJobDriver`<sup>Optional</sup> <a name="sparkSubmitJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver.property.sparkSubmitJobDriver"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver getSparkSubmitJobDriver();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a>

spark_submit_job_driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#spark_submit_job_driver EmrcontainersJobTemplate#spark_submit_job_driver}

---

### EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver <a name="EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver;

EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.builder()
//  .entryPoint(java.lang.String)
//  .sparkSqlParameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.property.entryPoint">entryPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.property.sparkSqlParameters">sparkSqlParameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#spark_sql_parameters EmrcontainersJobTemplate#spark_sql_parameters}. |

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.property.entryPoint"></a>

```java
public java.lang.String getEntryPoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}.

---

##### `sparkSqlParameters`<sup>Optional</sup> <a name="sparkSqlParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.property.sparkSqlParameters"></a>

```java
public java.lang.String getSparkSqlParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#spark_sql_parameters EmrcontainersJobTemplate#spark_sql_parameters}.

---

### EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver <a name="EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver;

EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.builder()
    .entryPoint(java.lang.String)
//  .entryPointArguments(java.util.List<java.lang.String>)
//  .sparkSubmitParameters(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.entryPoint">entryPoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.entryPointArguments">entryPointArguments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#entry_point_arguments EmrcontainersJobTemplate#entry_point_arguments}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.sparkSubmitParameters">sparkSubmitParameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#spark_submit_parameters EmrcontainersJobTemplate#spark_submit_parameters}. |

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.entryPoint"></a>

```java
public java.lang.String getEntryPoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}.

---

##### `entryPointArguments`<sup>Optional</sup> <a name="entryPointArguments" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.entryPointArguments"></a>

```java
public java.util.List<java.lang.String> getEntryPointArguments();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#entry_point_arguments EmrcontainersJobTemplate#entry_point_arguments}.

---

##### `sparkSubmitParameters`<sup>Optional</sup> <a name="sparkSubmitParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.sparkSubmitParameters"></a>

```java
public java.lang.String getSparkSubmitParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#spark_submit_parameters EmrcontainersJobTemplate#spark_submit_parameters}.

---

### EmrcontainersJobTemplateTimeouts <a name="EmrcontainersJobTemplateTimeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateTimeouts;

EmrcontainersJobTemplateTimeouts.builder()
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#delete EmrcontainersJobTemplate#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/emrcontainers_job_template#delete EmrcontainersJobTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.get"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations</a>>

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resetClassification">resetClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassification` <a name="resetClassification" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resetClassification"></a>

```java
public void resetClassification()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.classificationInput">classificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.classification">classification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classificationInput`<sup>Optional</sup> <a name="classificationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.classificationInput"></a>

```java
public java.lang.String getClassificationInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations</a>

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.get"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration</a>>

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.putConfigurations">putConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resetConfigurations">resetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigurations` <a name="putConfigurations" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.putConfigurations"></a>

```java
public void putConfigurations(IResolvable OR java.util.List<EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.putConfigurations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations</a>>

---

##### `resetConfigurations` <a name="resetConfigurations" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resetConfigurations"></a>

```java
public void resetConfigurations()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.configurations">configurations</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.classificationInput">classificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.configurationsInput">configurationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.classification">classification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.configurations"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList getConfigurations();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList</a>

---

##### `classificationInput`<sup>Optional</sup> <a name="classificationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.classificationInput"></a>

```java
public java.lang.String getClassificationInput();
```

- *Type:* java.lang.String

---

##### `configurationsInput`<sup>Optional</sup> <a name="configurationsInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.configurationsInput"></a>

```java
public java.lang.Object getConfigurationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations</a>>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration</a>

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.resetLogStreamNamePrefix">resetLogStreamNamePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogStreamNamePrefix` <a name="resetLogStreamNamePrefix" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.resetLogStreamNamePrefix"></a>

```java
public void resetLogStreamNamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logStreamNamePrefixInput">logStreamNamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logGroupName">logGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logStreamNamePrefix">logStreamNamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logGroupNameInput"></a>

```java
public java.lang.String getLogGroupNameInput();
```

- *Type:* java.lang.String

---

##### `logStreamNamePrefixInput`<sup>Optional</sup> <a name="logStreamNamePrefixInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logStreamNamePrefixInput"></a>

```java
public java.lang.String getLogStreamNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logGroupName"></a>

```java
public java.lang.String getLogGroupName();
```

- *Type:* java.lang.String

---

##### `logStreamNamePrefix`<sup>Required</sup> <a name="logStreamNamePrefix" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logStreamNamePrefix"></a>

```java
public java.lang.String getLogStreamNamePrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.internalValue"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a>

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putCloudWatchMonitoringConfiguration">putCloudWatchMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putS3MonitoringConfiguration">putS3MonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetCloudWatchMonitoringConfiguration">resetCloudWatchMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetPersistentAppUi">resetPersistentAppUi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetS3MonitoringConfiguration">resetS3MonitoringConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudWatchMonitoringConfiguration` <a name="putCloudWatchMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putCloudWatchMonitoringConfiguration"></a>

```java
public void putCloudWatchMonitoringConfiguration(EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putCloudWatchMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a>

---

##### `putS3MonitoringConfiguration` <a name="putS3MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putS3MonitoringConfiguration"></a>

```java
public void putS3MonitoringConfiguration(EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putS3MonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a>

---

##### `resetCloudWatchMonitoringConfiguration` <a name="resetCloudWatchMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetCloudWatchMonitoringConfiguration"></a>

```java
public void resetCloudWatchMonitoringConfiguration()
```

##### `resetPersistentAppUi` <a name="resetPersistentAppUi" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetPersistentAppUi"></a>

```java
public void resetPersistentAppUi()
```

##### `resetS3MonitoringConfiguration` <a name="resetS3MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetS3MonitoringConfiguration"></a>

```java
public void resetS3MonitoringConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.cloudWatchMonitoringConfiguration">cloudWatchMonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.s3MonitoringConfiguration">s3MonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.cloudWatchMonitoringConfigurationInput">cloudWatchMonitoringConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.persistentAppUiInput">persistentAppUiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.s3MonitoringConfigurationInput">s3MonitoringConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.persistentAppUi">persistentAppUi</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudWatchMonitoringConfiguration`<sup>Required</sup> <a name="cloudWatchMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.cloudWatchMonitoringConfiguration"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference getCloudWatchMonitoringConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference</a>

---

##### `s3MonitoringConfiguration`<sup>Required</sup> <a name="s3MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.s3MonitoringConfiguration"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference getS3MonitoringConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference</a>

---

##### `cloudWatchMonitoringConfigurationInput`<sup>Optional</sup> <a name="cloudWatchMonitoringConfigurationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.cloudWatchMonitoringConfigurationInput"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration getCloudWatchMonitoringConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a>

---

##### `persistentAppUiInput`<sup>Optional</sup> <a name="persistentAppUiInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.persistentAppUiInput"></a>

```java
public java.lang.String getPersistentAppUiInput();
```

- *Type:* java.lang.String

---

##### `s3MonitoringConfigurationInput`<sup>Optional</sup> <a name="s3MonitoringConfigurationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.s3MonitoringConfigurationInput"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration getS3MonitoringConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a>

---

##### `persistentAppUi`<sup>Required</sup> <a name="persistentAppUi" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.persistentAppUi"></a>

```java
public java.lang.String getPersistentAppUi();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.internalValue"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a>

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUriInput">logUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUri">logUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logUriInput`<sup>Optional</sup> <a name="logUriInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUriInput"></a>

```java
public java.lang.String getLogUriInput();
```

- *Type:* java.lang.String

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUri"></a>

```java
public java.lang.String getLogUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.internalValue"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a>

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putApplicationConfiguration">putApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putMonitoringConfiguration">putMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resetApplicationConfiguration">resetApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resetMonitoringConfiguration">resetMonitoringConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationConfiguration` <a name="putApplicationConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putApplicationConfiguration"></a>

```java
public void putApplicationConfiguration(IResolvable OR java.util.List<EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putApplicationConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration</a>>

---

##### `putMonitoringConfiguration` <a name="putMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putMonitoringConfiguration"></a>

```java
public void putMonitoringConfiguration(EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a>

---

##### `resetApplicationConfiguration` <a name="resetApplicationConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resetApplicationConfiguration"></a>

```java
public void resetApplicationConfiguration()
```

##### `resetMonitoringConfiguration` <a name="resetMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resetMonitoringConfiguration"></a>

```java
public void resetMonitoringConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.applicationConfiguration">applicationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.applicationConfigurationInput">applicationConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.monitoringConfigurationInput">monitoringConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationConfiguration`<sup>Required</sup> <a name="applicationConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.applicationConfiguration"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList getApplicationConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList</a>

---

##### `monitoringConfiguration`<sup>Required</sup> <a name="monitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.monitoringConfiguration"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference getMonitoringConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference</a>

---

##### `applicationConfigurationInput`<sup>Optional</sup> <a name="applicationConfigurationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.applicationConfigurationInput"></a>

```java
public java.lang.Object getApplicationConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration</a>>

---

##### `monitoringConfigurationInput`<sup>Optional</sup> <a name="monitoringConfigurationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.monitoringConfigurationInput"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration getMonitoringConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.internalValue"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a>

---


### EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference;

new EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSqlJobDriver">putSparkSqlJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSubmitJobDriver">putSparkSubmitJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resetSparkSqlJobDriver">resetSparkSqlJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resetSparkSubmitJobDriver">resetSparkSubmitJobDriver</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSparkSqlJobDriver` <a name="putSparkSqlJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSqlJobDriver"></a>

```java
public void putSparkSqlJobDriver(EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSqlJobDriver.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a>

---

##### `putSparkSubmitJobDriver` <a name="putSparkSubmitJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSubmitJobDriver"></a>

```java
public void putSparkSubmitJobDriver(EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSubmitJobDriver.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a>

---

##### `resetSparkSqlJobDriver` <a name="resetSparkSqlJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resetSparkSqlJobDriver"></a>

```java
public void resetSparkSqlJobDriver()
```

##### `resetSparkSubmitJobDriver` <a name="resetSparkSubmitJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resetSparkSubmitJobDriver"></a>

```java
public void resetSparkSubmitJobDriver()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSqlJobDriver">sparkSqlJobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSubmitJobDriver">sparkSubmitJobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSqlJobDriverInput">sparkSqlJobDriverInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSubmitJobDriverInput">sparkSubmitJobDriverInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sparkSqlJobDriver`<sup>Required</sup> <a name="sparkSqlJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSqlJobDriver"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference getSparkSqlJobDriver();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference</a>

---

##### `sparkSubmitJobDriver`<sup>Required</sup> <a name="sparkSubmitJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSubmitJobDriver"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference getSparkSubmitJobDriver();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference</a>

---

##### `sparkSqlJobDriverInput`<sup>Optional</sup> <a name="sparkSqlJobDriverInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSqlJobDriverInput"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver getSparkSqlJobDriverInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a>

---

##### `sparkSubmitJobDriverInput`<sup>Optional</sup> <a name="sparkSubmitJobDriverInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSubmitJobDriverInput"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver getSparkSubmitJobDriverInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.internalValue"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataJobDriver getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a>

---


### EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference;

new EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resetEntryPoint">resetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resetSparkSqlParameters">resetSparkSqlParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntryPoint` <a name="resetEntryPoint" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resetEntryPoint"></a>

```java
public void resetEntryPoint()
```

##### `resetSparkSqlParameters` <a name="resetSparkSqlParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resetSparkSqlParameters"></a>

```java
public void resetSparkSqlParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.entryPointInput">entryPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.sparkSqlParametersInput">sparkSqlParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.entryPoint">entryPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.sparkSqlParameters">sparkSqlParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entryPointInput`<sup>Optional</sup> <a name="entryPointInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.entryPointInput"></a>

```java
public java.lang.String getEntryPointInput();
```

- *Type:* java.lang.String

---

##### `sparkSqlParametersInput`<sup>Optional</sup> <a name="sparkSqlParametersInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.sparkSqlParametersInput"></a>

```java
public java.lang.String getSparkSqlParametersInput();
```

- *Type:* java.lang.String

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.entryPoint"></a>

```java
public java.lang.String getEntryPoint();
```

- *Type:* java.lang.String

---

##### `sparkSqlParameters`<sup>Required</sup> <a name="sparkSqlParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.sparkSqlParameters"></a>

```java
public java.lang.String getSparkSqlParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.internalValue"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a>

---


### EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference;

new EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resetEntryPointArguments">resetEntryPointArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resetSparkSubmitParameters">resetSparkSubmitParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntryPointArguments` <a name="resetEntryPointArguments" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resetEntryPointArguments"></a>

```java
public void resetEntryPointArguments()
```

##### `resetSparkSubmitParameters` <a name="resetSparkSubmitParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resetSparkSubmitParameters"></a>

```java
public void resetSparkSubmitParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointArgumentsInput">entryPointArgumentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointInput">entryPointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.sparkSubmitParametersInput">sparkSubmitParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPoint">entryPoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointArguments">entryPointArguments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.sparkSubmitParameters">sparkSubmitParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entryPointArgumentsInput`<sup>Optional</sup> <a name="entryPointArgumentsInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointArgumentsInput"></a>

```java
public java.util.List<java.lang.String> getEntryPointArgumentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entryPointInput`<sup>Optional</sup> <a name="entryPointInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointInput"></a>

```java
public java.lang.String getEntryPointInput();
```

- *Type:* java.lang.String

---

##### `sparkSubmitParametersInput`<sup>Optional</sup> <a name="sparkSubmitParametersInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.sparkSubmitParametersInput"></a>

```java
public java.lang.String getSparkSubmitParametersInput();
```

- *Type:* java.lang.String

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPoint"></a>

```java
public java.lang.String getEntryPoint();
```

- *Type:* java.lang.String

---

##### `entryPointArguments`<sup>Required</sup> <a name="entryPointArguments" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointArguments"></a>

```java
public java.util.List<java.lang.String> getEntryPointArguments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sparkSubmitParameters`<sup>Required</sup> <a name="sparkSubmitParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.sparkSubmitParameters"></a>

```java
public java.lang.String getSparkSubmitParameters();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.internalValue"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a>

---


### EmrcontainersJobTemplateJobTemplateDataOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateJobTemplateDataOutputReference;

new EmrcontainersJobTemplateJobTemplateDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putConfigurationOverrides">putConfigurationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putJobDriver">putJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resetConfigurationOverrides">resetConfigurationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resetJobTags">resetJobTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigurationOverrides` <a name="putConfigurationOverrides" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putConfigurationOverrides"></a>

```java
public void putConfigurationOverrides(EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putConfigurationOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a>

---

##### `putJobDriver` <a name="putJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putJobDriver"></a>

```java
public void putJobDriver(EmrcontainersJobTemplateJobTemplateDataJobDriver value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putJobDriver.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a>

---

##### `resetConfigurationOverrides` <a name="resetConfigurationOverrides" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resetConfigurationOverrides"></a>

```java
public void resetConfigurationOverrides()
```

##### `resetJobTags` <a name="resetJobTags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resetJobTags"></a>

```java
public void resetJobTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.configurationOverrides">configurationOverrides</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobDriver">jobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.configurationOverridesInput">configurationOverridesInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobDriverInput">jobDriverInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobTagsInput">jobTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.releaseLabelInput">releaseLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobTags">jobTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.releaseLabel">releaseLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationOverrides`<sup>Required</sup> <a name="configurationOverrides" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.configurationOverrides"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference getConfigurationOverrides();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference</a>

---

##### `jobDriver`<sup>Required</sup> <a name="jobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobDriver"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference getJobDriver();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference</a>

---

##### `configurationOverridesInput`<sup>Optional</sup> <a name="configurationOverridesInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.configurationOverridesInput"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides getConfigurationOverridesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a>

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `jobDriverInput`<sup>Optional</sup> <a name="jobDriverInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobDriverInput"></a>

```java
public EmrcontainersJobTemplateJobTemplateDataJobDriver getJobDriverInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a>

---

##### `jobTagsInput`<sup>Optional</sup> <a name="jobTagsInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getJobTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `releaseLabelInput`<sup>Optional</sup> <a name="releaseLabelInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.releaseLabelInput"></a>

```java
public java.lang.String getReleaseLabelInput();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `jobTags`<sup>Required</sup> <a name="jobTags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getJobTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.releaseLabel"></a>

```java
public java.lang.String getReleaseLabel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.internalValue"></a>

```java
public EmrcontainersJobTemplateJobTemplateData getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a>

---


### EmrcontainersJobTemplateTimeoutsOutputReference <a name="EmrcontainersJobTemplateTimeoutsOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emrcontainers_job_template.EmrcontainersJobTemplateTimeoutsOutputReference;

new EmrcontainersJobTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts">EmrcontainersJobTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts">EmrcontainersJobTemplateTimeouts</a>

---



