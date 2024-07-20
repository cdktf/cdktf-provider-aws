# `dataAwsServicecatalogProvisioningArtifacts` Submodule <a name="`dataAwsServicecatalogProvisioningArtifacts` Submodule" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicecatalogProvisioningArtifacts <a name="DataAwsServicecatalogProvisioningArtifacts" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts aws_servicecatalog_provisioning_artifacts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_provisioning_artifacts.DataAwsServicecatalogProvisioningArtifacts;

DataAwsServicecatalogProvisioningArtifacts.Builder.create(Construct scope, java.lang.String id)
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
    .productId(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAwsServicecatalogProvisioningArtifactsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.productId">productId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#product_id DataAwsServicecatalogProvisioningArtifacts#product_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#accept_language DataAwsServicecatalogProvisioningArtifacts#accept_language}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#id DataAwsServicecatalogProvisioningArtifacts#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts">DataAwsServicecatalogProvisioningArtifactsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.productId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#product_id DataAwsServicecatalogProvisioningArtifacts#product_id}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.acceptLanguage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#accept_language DataAwsServicecatalogProvisioningArtifacts#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#id DataAwsServicecatalogProvisioningArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts">DataAwsServicecatalogProvisioningArtifactsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#timeouts DataAwsServicecatalogProvisioningArtifacts#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.putTimeouts"></a>

```java
public void putTimeouts(DataAwsServicecatalogProvisioningArtifactsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts">DataAwsServicecatalogProvisioningArtifactsTimeouts</a>

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetAcceptLanguage"></a>

```java
public void resetAcceptLanguage()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsServicecatalogProvisioningArtifacts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_provisioning_artifacts.DataAwsServicecatalogProvisioningArtifacts;

DataAwsServicecatalogProvisioningArtifacts.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_provisioning_artifacts.DataAwsServicecatalogProvisioningArtifacts;

DataAwsServicecatalogProvisioningArtifacts.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_provisioning_artifacts.DataAwsServicecatalogProvisioningArtifacts;

DataAwsServicecatalogProvisioningArtifacts.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_provisioning_artifacts.DataAwsServicecatalogProvisioningArtifacts;

DataAwsServicecatalogProvisioningArtifacts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsServicecatalogProvisioningArtifacts.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsServicecatalogProvisioningArtifacts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsServicecatalogProvisioningArtifacts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsServicecatalogProvisioningArtifacts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsServicecatalogProvisioningArtifacts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.provisioningArtifactDetails">provisioningArtifactDetails</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList">DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference">DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.productIdInput">productIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts">DataAwsServicecatalogProvisioningArtifactsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.productId">productId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioningArtifactDetails`<sup>Required</sup> <a name="provisioningArtifactDetails" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.provisioningArtifactDetails"></a>

```java
public DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList getProvisioningArtifactDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList">DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.timeouts"></a>

```java
public DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference">DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.acceptLanguageInput"></a>

```java
public java.lang.String getAcceptLanguageInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.productIdInput"></a>

```java
public java.lang.String getProductIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts">DataAwsServicecatalogProvisioningArtifactsTimeouts</a>

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifacts.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicecatalogProvisioningArtifactsConfig <a name="DataAwsServicecatalogProvisioningArtifactsConfig" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_provisioning_artifacts.DataAwsServicecatalogProvisioningArtifactsConfig;

DataAwsServicecatalogProvisioningArtifactsConfig.builder()
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
    .productId(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAwsServicecatalogProvisioningArtifactsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.productId">productId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#product_id DataAwsServicecatalogProvisioningArtifacts#product_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#accept_language DataAwsServicecatalogProvisioningArtifacts#accept_language}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#id DataAwsServicecatalogProvisioningArtifacts#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts">DataAwsServicecatalogProvisioningArtifactsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#product_id DataAwsServicecatalogProvisioningArtifacts#product_id}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#accept_language DataAwsServicecatalogProvisioningArtifacts#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#id DataAwsServicecatalogProvisioningArtifacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsConfig.property.timeouts"></a>

```java
public DataAwsServicecatalogProvisioningArtifactsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts">DataAwsServicecatalogProvisioningArtifactsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#timeouts DataAwsServicecatalogProvisioningArtifacts#timeouts}

---

### DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails <a name="DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_provisioning_artifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails;

DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails.builder()
    .build();
```


### DataAwsServicecatalogProvisioningArtifactsTimeouts <a name="DataAwsServicecatalogProvisioningArtifactsTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_provisioning_artifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts;

DataAwsServicecatalogProvisioningArtifactsTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#read DataAwsServicecatalogProvisioningArtifacts#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.59.0/docs/data-sources/servicecatalog_provisioning_artifacts#read DataAwsServicecatalogProvisioningArtifacts#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList <a name="DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_provisioning_artifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList;

new DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.get"></a>

```java
public DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference <a name="DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_provisioning_artifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference;

new DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.active">active</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.guidance">guidance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails">DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `guidance`<sup>Required</sup> <a name="guidance" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.guidance"></a>

```java
public java.lang.String getGuidance();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetailsOutputReference.property.internalValue"></a>

```java
public DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails">DataAwsServicecatalogProvisioningArtifactsProvisioningArtifactDetails</a>

---


### DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference <a name="DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_provisioning_artifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference;

new DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts">DataAwsServicecatalogProvisioningArtifactsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.dataAwsServicecatalogProvisioningArtifacts.DataAwsServicecatalogProvisioningArtifactsTimeouts">DataAwsServicecatalogProvisioningArtifactsTimeouts</a>

---



