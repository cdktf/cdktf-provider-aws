# `servicecatalogProvisioningArtifact` Submodule <a name="`servicecatalogProvisioningArtifact` Submodule" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogProvisioningArtifact <a name="ServicecatalogProvisioningArtifact" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact aws_servicecatalog_provisioning_artifact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_provisioning_artifact.ServicecatalogProvisioningArtifact;

ServicecatalogProvisioningArtifact.Builder.create(Construct scope, java.lang.String id)
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
    .productId(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .description(java.lang.String)
//  .disableTemplateValidation(java.lang.Boolean)
//  .disableTemplateValidation(IResolvable)
//  .guidance(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .templatePhysicalId(java.lang.String)
//  .templateUrl(java.lang.String)
//  .timeouts(ServicecatalogProvisioningArtifactTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.productId">productId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#product_id ServicecatalogProvisioningArtifact#product_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#accept_language ServicecatalogProvisioningArtifact#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#active ServicecatalogProvisioningArtifact#active}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#description ServicecatalogProvisioningArtifact#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.disableTemplateValidation">disableTemplateValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.guidance">guidance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#guidance ServicecatalogProvisioningArtifact#guidance}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#id ServicecatalogProvisioningArtifact#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#name ServicecatalogProvisioningArtifact#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.templatePhysicalId">templatePhysicalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_url ServicecatalogProvisioningArtifact#template_url}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#type ServicecatalogProvisioningArtifact#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.productId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#product_id ServicecatalogProvisioningArtifact#product_id}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.acceptLanguage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#accept_language ServicecatalogProvisioningArtifact#accept_language}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#active ServicecatalogProvisioningArtifact#active}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#description ServicecatalogProvisioningArtifact#description}.

---

##### `disableTemplateValidation`<sup>Optional</sup> <a name="disableTemplateValidation" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.disableTemplateValidation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}.

---

##### `guidance`<sup>Optional</sup> <a name="guidance" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.guidance"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#guidance ServicecatalogProvisioningArtifact#guidance}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#id ServicecatalogProvisioningArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#name ServicecatalogProvisioningArtifact#name}.

---

##### `templatePhysicalId`<sup>Optional</sup> <a name="templatePhysicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.templatePhysicalId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}.

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.templateUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_url ServicecatalogProvisioningArtifact#template_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#timeouts ServicecatalogProvisioningArtifact#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#type ServicecatalogProvisioningArtifact#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDisableTemplateValidation">resetDisableTemplateValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetGuidance">resetGuidance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplatePhysicalId">resetTemplatePhysicalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplateUrl">resetTemplateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.putTimeouts"></a>

```java
public void putTimeouts(ServicecatalogProvisioningArtifactTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a>

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetAcceptLanguage"></a>

```java
public void resetAcceptLanguage()
```

##### `resetActive` <a name="resetActive" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetActive"></a>

```java
public void resetActive()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableTemplateValidation` <a name="resetDisableTemplateValidation" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetDisableTemplateValidation"></a>

```java
public void resetDisableTemplateValidation()
```

##### `resetGuidance` <a name="resetGuidance" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetGuidance"></a>

```java
public void resetGuidance()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetName"></a>

```java
public void resetName()
```

##### `resetTemplatePhysicalId` <a name="resetTemplatePhysicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplatePhysicalId"></a>

```java
public void resetTemplatePhysicalId()
```

##### `resetTemplateUrl` <a name="resetTemplateUrl" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTemplateUrl"></a>

```java
public void resetTemplateUrl()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_provisioning_artifact.ServicecatalogProvisioningArtifact;

ServicecatalogProvisioningArtifact.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_provisioning_artifact.ServicecatalogProvisioningArtifact;

ServicecatalogProvisioningArtifact.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_provisioning_artifact.ServicecatalogProvisioningArtifact;

ServicecatalogProvisioningArtifact.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference">ServicecatalogProvisioningArtifactTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidationInput">disableTemplateValidationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidanceInput">guidanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productIdInput">productIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalIdInput">templatePhysicalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrlInput">templateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidation">disableTemplateValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidance">guidance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productId">productId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalId">templatePhysicalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeouts"></a>

```java
public ServicecatalogProvisioningArtifactTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference">ServicecatalogProvisioningArtifactTimeoutsOutputReference</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguageInput"></a>

```java
public java.lang.String getAcceptLanguageInput();
```

- *Type:* java.lang.String

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.activeInput"></a>

```java
public java.lang.Object getActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableTemplateValidationInput`<sup>Optional</sup> <a name="disableTemplateValidationInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidationInput"></a>

```java
public java.lang.Object getDisableTemplateValidationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `guidanceInput`<sup>Optional</sup> <a name="guidanceInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidanceInput"></a>

```java
public java.lang.String getGuidanceInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productIdInput"></a>

```java
public java.lang.String getProductIdInput();
```

- *Type:* java.lang.String

---

##### `templatePhysicalIdInput`<sup>Optional</sup> <a name="templatePhysicalIdInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalIdInput"></a>

```java
public java.lang.String getTemplatePhysicalIdInput();
```

- *Type:* java.lang.String

---

##### `templateUrlInput`<sup>Optional</sup> <a name="templateUrlInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrlInput"></a>

```java
public java.lang.String getTemplateUrlInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableTemplateValidation`<sup>Required</sup> <a name="disableTemplateValidation" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.disableTemplateValidation"></a>

```java
public java.lang.Object getDisableTemplateValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `guidance`<sup>Required</sup> <a name="guidance" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.guidance"></a>

```java
public java.lang.String getGuidance();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

---

##### `templatePhysicalId`<sup>Required</sup> <a name="templatePhysicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templatePhysicalId"></a>

```java
public java.lang.String getTemplatePhysicalId();
```

- *Type:* java.lang.String

---

##### `templateUrl`<sup>Required</sup> <a name="templateUrl" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.templateUrl"></a>

```java
public java.lang.String getTemplateUrl();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifact.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogProvisioningArtifactConfig <a name="ServicecatalogProvisioningArtifactConfig" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_provisioning_artifact.ServicecatalogProvisioningArtifactConfig;

ServicecatalogProvisioningArtifactConfig.builder()
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
    .productId(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .description(java.lang.String)
//  .disableTemplateValidation(java.lang.Boolean)
//  .disableTemplateValidation(IResolvable)
//  .guidance(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .templatePhysicalId(java.lang.String)
//  .templateUrl(java.lang.String)
//  .timeouts(ServicecatalogProvisioningArtifactTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.productId">productId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#product_id ServicecatalogProvisioningArtifact#product_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#accept_language ServicecatalogProvisioningArtifact#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#active ServicecatalogProvisioningArtifact#active}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#description ServicecatalogProvisioningArtifact#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.disableTemplateValidation">disableTemplateValidation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.guidance">guidance</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#guidance ServicecatalogProvisioningArtifact#guidance}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#id ServicecatalogProvisioningArtifact#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#name ServicecatalogProvisioningArtifact#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templatePhysicalId">templatePhysicalId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_url ServicecatalogProvisioningArtifact#template_url}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#type ServicecatalogProvisioningArtifact#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#product_id ServicecatalogProvisioningArtifact#product_id}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#accept_language ServicecatalogProvisioningArtifact#accept_language}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#active ServicecatalogProvisioningArtifact#active}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#description ServicecatalogProvisioningArtifact#description}.

---

##### `disableTemplateValidation`<sup>Optional</sup> <a name="disableTemplateValidation" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.disableTemplateValidation"></a>

```java
public java.lang.Object getDisableTemplateValidation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}.

---

##### `guidance`<sup>Optional</sup> <a name="guidance" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.guidance"></a>

```java
public java.lang.String getGuidance();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#guidance ServicecatalogProvisioningArtifact#guidance}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#id ServicecatalogProvisioningArtifact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#name ServicecatalogProvisioningArtifact#name}.

---

##### `templatePhysicalId`<sup>Optional</sup> <a name="templatePhysicalId" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templatePhysicalId"></a>

```java
public java.lang.String getTemplatePhysicalId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}.

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.templateUrl"></a>

```java
public java.lang.String getTemplateUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#template_url ServicecatalogProvisioningArtifact#template_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.timeouts"></a>

```java
public ServicecatalogProvisioningArtifactTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#timeouts ServicecatalogProvisioningArtifact#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#type ServicecatalogProvisioningArtifact#type}.

---

### ServicecatalogProvisioningArtifactTimeouts <a name="ServicecatalogProvisioningArtifactTimeouts" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_provisioning_artifact.ServicecatalogProvisioningArtifactTimeouts;

ServicecatalogProvisioningArtifactTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#create ServicecatalogProvisioningArtifact#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#delete ServicecatalogProvisioningArtifact#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#read ServicecatalogProvisioningArtifact#read}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#update ServicecatalogProvisioningArtifact#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#create ServicecatalogProvisioningArtifact#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#delete ServicecatalogProvisioningArtifact#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#read ServicecatalogProvisioningArtifact#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioning_artifact#update ServicecatalogProvisioningArtifact#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogProvisioningArtifactTimeoutsOutputReference <a name="ServicecatalogProvisioningArtifactTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_provisioning_artifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference;

new ServicecatalogProvisioningArtifactTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogProvisioningArtifact.ServicecatalogProvisioningArtifactTimeouts">ServicecatalogProvisioningArtifactTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



