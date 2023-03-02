# `dataAwsServicecatalogPortfolioConstraints` Submodule <a name="`dataAwsServicecatalogPortfolioConstraints` Submodule" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicecatalogPortfolioConstraints <a name="DataAwsServicecatalogPortfolioConstraints" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints aws_servicecatalog_portfolio_constraints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_portfolio_constraints.DataAwsServicecatalogPortfolioConstraints;

DataAwsServicecatalogPortfolioConstraints.Builder.create(Construct scope, java.lang.String id)
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
    .portfolioId(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .id(java.lang.String)
//  .productId(java.lang.String)
//  .timeouts(DataAwsServicecatalogPortfolioConstraintsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.portfolioId">portfolioId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#id DataAwsServicecatalogPortfolioConstraints#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.productId">productId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#product_id DataAwsServicecatalogPortfolioConstraints#product_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.portfolioId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.acceptLanguage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#id DataAwsServicecatalogPortfolioConstraints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `productId`<sup>Optional</sup> <a name="productId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.productId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#product_id DataAwsServicecatalogPortfolioConstraints#product_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#timeouts DataAwsServicecatalogPortfolioConstraints#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetProductId">resetProductId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.putTimeouts"></a>

```java
public void putTimeouts(DataAwsServicecatalogPortfolioConstraintsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a>

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetAcceptLanguage"></a>

```java
public void resetAcceptLanguage()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetId"></a>

```java
public void resetId()
```

##### `resetProductId` <a name="resetProductId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetProductId"></a>

```java
public void resetProductId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_portfolio_constraints.DataAwsServicecatalogPortfolioConstraints;

DataAwsServicecatalogPortfolioConstraints.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_portfolio_constraints.DataAwsServicecatalogPortfolioConstraints;

DataAwsServicecatalogPortfolioConstraints.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_portfolio_constraints.DataAwsServicecatalogPortfolioConstraints;

DataAwsServicecatalogPortfolioConstraints.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.details">details</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList">DataAwsServicecatalogPortfolioConstraintsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference">DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioIdInput">portfolioIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productIdInput">productIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioId">portfolioId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productId">productId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.details"></a>

```java
public DataAwsServicecatalogPortfolioConstraintsDetailsList getDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList">DataAwsServicecatalogPortfolioConstraintsDetailsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.timeouts"></a>

```java
public DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference">DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguageInput"></a>

```java
public java.lang.String getAcceptLanguageInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `portfolioIdInput`<sup>Optional</sup> <a name="portfolioIdInput" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioIdInput"></a>

```java
public java.lang.String getPortfolioIdInput();
```

- *Type:* java.lang.String

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productIdInput"></a>

```java
public java.lang.String getProductIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.portfolioId"></a>

```java
public java.lang.String getPortfolioId();
```

- *Type:* java.lang.String

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraints.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicecatalogPortfolioConstraintsConfig <a name="DataAwsServicecatalogPortfolioConstraintsConfig" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_portfolio_constraints.DataAwsServicecatalogPortfolioConstraintsConfig;

DataAwsServicecatalogPortfolioConstraintsConfig.builder()
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
    .portfolioId(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .id(java.lang.String)
//  .productId(java.lang.String)
//  .timeouts(DataAwsServicecatalogPortfolioConstraintsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.portfolioId">portfolioId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#id DataAwsServicecatalogPortfolioConstraints#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.productId">productId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#product_id DataAwsServicecatalogPortfolioConstraints#product_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.portfolioId"></a>

```java
public java.lang.String getPortfolioId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#id DataAwsServicecatalogPortfolioConstraints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `productId`<sup>Optional</sup> <a name="productId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#product_id DataAwsServicecatalogPortfolioConstraints#product_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsConfig.property.timeouts"></a>

```java
public DataAwsServicecatalogPortfolioConstraintsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#timeouts DataAwsServicecatalogPortfolioConstraints#timeouts}

---

### DataAwsServicecatalogPortfolioConstraintsDetails <a name="DataAwsServicecatalogPortfolioConstraintsDetails" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_portfolio_constraints.DataAwsServicecatalogPortfolioConstraintsDetails;

DataAwsServicecatalogPortfolioConstraintsDetails.builder()
    .build();
```


### DataAwsServicecatalogPortfolioConstraintsTimeouts <a name="DataAwsServicecatalogPortfolioConstraintsTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_portfolio_constraints.DataAwsServicecatalogPortfolioConstraintsTimeouts;

DataAwsServicecatalogPortfolioConstraintsTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#read DataAwsServicecatalogPortfolioConstraints#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_portfolio_constraints#read DataAwsServicecatalogPortfolioConstraints#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsServicecatalogPortfolioConstraintsDetailsList <a name="DataAwsServicecatalogPortfolioConstraintsDetailsList" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_portfolio_constraints.DataAwsServicecatalogPortfolioConstraintsDetailsList;

new DataAwsServicecatalogPortfolioConstraintsDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.get"></a>

```java
public DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference <a name="DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_portfolio_constraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference;

new DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.constraintId">constraintId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.portfolioId">portfolioId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.productId">productId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails">DataAwsServicecatalogPortfolioConstraintsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `constraintId`<sup>Required</sup> <a name="constraintId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.constraintId"></a>

```java
public java.lang.String getConstraintId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.portfolioId"></a>

```java
public java.lang.String getPortfolioId();
```

- *Type:* java.lang.String

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.productId"></a>

```java
public java.lang.String getProductId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference.property.internalValue"></a>

```java
public DataAwsServicecatalogPortfolioConstraintsDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsDetails">DataAwsServicecatalogPortfolioConstraintsDetails</a>

---


### DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference <a name="DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_servicecatalog_portfolio_constraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference;

new DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogPortfolioConstraints.DataAwsServicecatalogPortfolioConstraintsTimeouts">DataAwsServicecatalogPortfolioConstraintsTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



