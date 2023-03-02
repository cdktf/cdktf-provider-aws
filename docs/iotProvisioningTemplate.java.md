# `iotProvisioningTemplate` Submodule <a name="`iotProvisioningTemplate` Submodule" id="@cdktf/provider-aws.iotProvisioningTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotProvisioningTemplate <a name="IotProvisioningTemplate" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template aws_iot_provisioning_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_provisioning_template.IotProvisioningTemplate;

IotProvisioningTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .provisioningRoleArn(java.lang.String)
    .templateBody(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .preProvisioningHook(IotProvisioningTemplatePreProvisioningHook)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#name IotProvisioningTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioningRoleArn">provisioningRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateBody">templateBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#description IotProvisioningTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#id IotProvisioningTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.preProvisioningHook">preProvisioningHook</a></code> | <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | pre_provisioning_hook block. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags IotProvisioningTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags_all IotProvisioningTemplate#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#name IotProvisioningTemplate#name}.

---

##### `provisioningRoleArn`<sup>Required</sup> <a name="provisioningRoleArn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.provisioningRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}.

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.templateBody"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#description IotProvisioningTemplate#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#id IotProvisioningTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preProvisioningHook`<sup>Optional</sup> <a name="preProvisioningHook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.preProvisioningHook"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

pre_provisioning_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags IotProvisioningTemplate#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags_all IotProvisioningTemplate#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook">putPreProvisioningHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetPreProvisioningHook">resetPreProvisioningHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPreProvisioningHook` <a name="putPreProvisioningHook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook"></a>

```java
public void putPreProvisioningHook(IotProvisioningTemplatePreProvisioningHook value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.putPreProvisioningHook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetPreProvisioningHook` <a name="resetPreProvisioningHook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetPreProvisioningHook"></a>

```java
public void resetPreProvisioningHook()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_provisioning_template.IotProvisioningTemplate;

IotProvisioningTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_provisioning_template.IotProvisioningTemplate;

IotProvisioningTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_provisioning_template.IotProvisioningTemplate;

IotProvisioningTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.defaultVersionId">defaultVersionId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHook">preProvisioningHook</a></code> | <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference">IotProvisioningTemplatePreProvisioningHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHookInput">preProvisioningHookInput</a></code> | <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArnInput">provisioningRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBodyInput">templateBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArn">provisioningRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `defaultVersionId`<sup>Required</sup> <a name="defaultVersionId" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.defaultVersionId"></a>

```java
public java.lang.Number getDefaultVersionId();
```

- *Type:* java.lang.Number

---

##### `preProvisioningHook`<sup>Required</sup> <a name="preProvisioningHook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHook"></a>

```java
public IotProvisioningTemplatePreProvisioningHookOutputReference getPreProvisioningHook();
```

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference">IotProvisioningTemplatePreProvisioningHookOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `preProvisioningHookInput`<sup>Optional</sup> <a name="preProvisioningHookInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.preProvisioningHookInput"></a>

```java
public IotProvisioningTemplatePreProvisioningHook getPreProvisioningHookInput();
```

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

---

##### `provisioningRoleArnInput`<sup>Optional</sup> <a name="provisioningRoleArnInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArnInput"></a>

```java
public java.lang.String getProvisioningRoleArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBodyInput"></a>

```java
public java.lang.String getTemplateBodyInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `provisioningRoleArn`<sup>Required</sup> <a name="provisioningRoleArn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.provisioningRoleArn"></a>

```java
public java.lang.String getProvisioningRoleArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotProvisioningTemplateConfig <a name="IotProvisioningTemplateConfig" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_provisioning_template.IotProvisioningTemplateConfig;

IotProvisioningTemplateConfig.builder()
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
    .name(java.lang.String)
    .provisioningRoleArn(java.lang.String)
    .templateBody(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .preProvisioningHook(IotProvisioningTemplatePreProvisioningHook)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#name IotProvisioningTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioningRoleArn">provisioningRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#description IotProvisioningTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#id IotProvisioningTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.preProvisioningHook">preProvisioningHook</a></code> | <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | pre_provisioning_hook block. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags IotProvisioningTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags_all IotProvisioningTemplate#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#name IotProvisioningTemplate#name}.

---

##### `provisioningRoleArn`<sup>Required</sup> <a name="provisioningRoleArn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.provisioningRoleArn"></a>

```java
public java.lang.String getProvisioningRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#provisioning_role_arn IotProvisioningTemplate#provisioning_role_arn}.

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#template_body IotProvisioningTemplate#template_body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#description IotProvisioningTemplate#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#enabled IotProvisioningTemplate#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#id IotProvisioningTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preProvisioningHook`<sup>Optional</sup> <a name="preProvisioningHook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.preProvisioningHook"></a>

```java
public IotProvisioningTemplatePreProvisioningHook getPreProvisioningHook();
```

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

pre_provisioning_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#pre_provisioning_hook IotProvisioningTemplate#pre_provisioning_hook}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags IotProvisioningTemplate#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplateConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#tags_all IotProvisioningTemplate#tags_all}.

---

### IotProvisioningTemplatePreProvisioningHook <a name="IotProvisioningTemplatePreProvisioningHook" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_provisioning_template.IotProvisioningTemplatePreProvisioningHook;

IotProvisioningTemplatePreProvisioningHook.builder()
    .targetArn(java.lang.String)
//  .payloadVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#target_arn IotProvisioningTemplate#target_arn}. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.payloadVersion">payloadVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#payload_version IotProvisioningTemplate#payload_version}. |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#target_arn IotProvisioningTemplate#target_arn}.

---

##### `payloadVersion`<sup>Optional</sup> <a name="payloadVersion" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook.property.payloadVersion"></a>

```java
public java.lang.String getPayloadVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_provisioning_template#payload_version IotProvisioningTemplate#payload_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotProvisioningTemplatePreProvisioningHookOutputReference <a name="IotProvisioningTemplatePreProvisioningHookOutputReference" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_provisioning_template.IotProvisioningTemplatePreProvisioningHookOutputReference;

new IotProvisioningTemplatePreProvisioningHookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resetPayloadVersion">resetPayloadVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPayloadVersion` <a name="resetPayloadVersion" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.resetPayloadVersion"></a>

```java
public void resetPayloadVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersionInput">payloadVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArnInput">targetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersion">payloadVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `payloadVersionInput`<sup>Optional</sup> <a name="payloadVersionInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersionInput"></a>

```java
public java.lang.String getPayloadVersionInput();
```

- *Type:* java.lang.String

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArnInput"></a>

```java
public java.lang.String getTargetArnInput();
```

- *Type:* java.lang.String

---

##### `payloadVersion`<sup>Required</sup> <a name="payloadVersion" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.payloadVersion"></a>

```java
public java.lang.String getPayloadVersion();
```

- *Type:* java.lang.String

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHookOutputReference.property.internalValue"></a>

```java
public IotProvisioningTemplatePreProvisioningHook getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.iotProvisioningTemplate.IotProvisioningTemplatePreProvisioningHook">IotProvisioningTemplatePreProvisioningHook</a>

---



