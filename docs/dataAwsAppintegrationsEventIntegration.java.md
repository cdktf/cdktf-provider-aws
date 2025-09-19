# `dataAwsAppintegrationsEventIntegration` Submodule <a name="`dataAwsAppintegrationsEventIntegration` Submodule" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppintegrationsEventIntegration <a name="DataAwsAppintegrationsEventIntegration" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration aws_appintegrations_event_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appintegrations_event_integration.DataAwsAppintegrationsEventIntegration;

DataAwsAppintegrationsEventIntegration.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration#name DataAwsAppintegrationsEventIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration#id DataAwsAppintegrationsEventIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration#tags DataAwsAppintegrationsEventIntegration#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration#name DataAwsAppintegrationsEventIntegration#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration#id DataAwsAppintegrationsEventIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration#region DataAwsAppintegrationsEventIntegration#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration#tags DataAwsAppintegrationsEventIntegration#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsAppintegrationsEventIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appintegrations_event_integration.DataAwsAppintegrationsEventIntegration;

DataAwsAppintegrationsEventIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appintegrations_event_integration.DataAwsAppintegrationsEventIntegration;

DataAwsAppintegrationsEventIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appintegrations_event_integration.DataAwsAppintegrationsEventIntegration;

DataAwsAppintegrationsEventIntegration.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appintegrations_event_integration.DataAwsAppintegrationsEventIntegration;

DataAwsAppintegrationsEventIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsAppintegrationsEventIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsAppintegrationsEventIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsAppintegrationsEventIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsAppintegrationsEventIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsAppintegrationsEventIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.eventbridgeBus">eventbridgeBus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.eventFilter">eventFilter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList">DataAwsAppintegrationsEventIntegrationEventFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `eventbridgeBus`<sup>Required</sup> <a name="eventbridgeBus" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.eventbridgeBus"></a>

```java
public java.lang.String getEventbridgeBus();
```

- *Type:* java.lang.String

---

##### `eventFilter`<sup>Required</sup> <a name="eventFilter" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.eventFilter"></a>

```java
public DataAwsAppintegrationsEventIntegrationEventFilterList getEventFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList">DataAwsAppintegrationsEventIntegrationEventFilterList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppintegrationsEventIntegrationConfig <a name="DataAwsAppintegrationsEventIntegrationConfig" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appintegrations_event_integration.DataAwsAppintegrationsEventIntegrationConfig;

DataAwsAppintegrationsEventIntegrationConfig.builder()
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration#name DataAwsAppintegrationsEventIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration#id DataAwsAppintegrationsEventIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration#tags DataAwsAppintegrationsEventIntegration#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration#name DataAwsAppintegrationsEventIntegration#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration#id DataAwsAppintegrationsEventIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration#region DataAwsAppintegrationsEventIntegration#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/data-sources/appintegrations_event_integration#tags DataAwsAppintegrationsEventIntegration#tags}.

---

### DataAwsAppintegrationsEventIntegrationEventFilter <a name="DataAwsAppintegrationsEventIntegrationEventFilter" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appintegrations_event_integration.DataAwsAppintegrationsEventIntegrationEventFilter;

DataAwsAppintegrationsEventIntegrationEventFilter.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAppintegrationsEventIntegrationEventFilterList <a name="DataAwsAppintegrationsEventIntegrationEventFilterList" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appintegrations_event_integration.DataAwsAppintegrationsEventIntegrationEventFilterList;

new DataAwsAppintegrationsEventIntegrationEventFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.get"></a>

```java
public DataAwsAppintegrationsEventIntegrationEventFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsAppintegrationsEventIntegrationEventFilterOutputReference <a name="DataAwsAppintegrationsEventIntegrationEventFilterOutputReference" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_appintegrations_event_integration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference;

new DataAwsAppintegrationsEventIntegrationEventFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilter">DataAwsAppintegrationsEventIntegrationEventFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue"></a>

```java
public DataAwsAppintegrationsEventIntegrationEventFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilter">DataAwsAppintegrationsEventIntegrationEventFilter</a>

---



