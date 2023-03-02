# `servicecatalogServiceAction` Submodule <a name="`servicecatalogServiceAction` Submodule" id="@cdktf/provider-aws.servicecatalogServiceAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogServiceAction <a name="ServicecatalogServiceAction" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action aws_servicecatalog_service_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_service_action.ServicecatalogServiceAction;

ServicecatalogServiceAction.Builder.create(Construct scope, java.lang.String id)
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
    .definition(ServicecatalogServiceActionDefinition)
    .name(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ServicecatalogServiceActionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.definition">definition</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a></code> | definition block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#name ServicecatalogServiceAction#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#accept_language ServicecatalogServiceAction#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#description ServicecatalogServiceAction#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#id ServicecatalogServiceAction#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.definition"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>

definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#definition ServicecatalogServiceAction#definition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#name ServicecatalogServiceAction#name}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.acceptLanguage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#accept_language ServicecatalogServiceAction#accept_language}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#description ServicecatalogServiceAction#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#id ServicecatalogServiceAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#timeouts ServicecatalogServiceAction#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putDefinition">putDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDefinition` <a name="putDefinition" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putDefinition"></a>

```java
public void putDefinition(ServicecatalogServiceActionDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putTimeouts"></a>

```java
public void putTimeouts(ServicecatalogServiceActionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a>

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetAcceptLanguage"></a>

```java
public void resetAcceptLanguage()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_service_action.ServicecatalogServiceAction;

ServicecatalogServiceAction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_service_action.ServicecatalogServiceAction;

ServicecatalogServiceAction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_service_action.ServicecatalogServiceAction;

ServicecatalogServiceAction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.definition">definition</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference">ServicecatalogServiceActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference">ServicecatalogServiceActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.definitionInput">definitionInput</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.definition"></a>

```java
public ServicecatalogServiceActionDefinitionOutputReference getDefinition();
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference">ServicecatalogServiceActionDefinitionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.timeouts"></a>

```java
public ServicecatalogServiceActionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference">ServicecatalogServiceActionTimeoutsOutputReference</a>

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguageInput"></a>

```java
public java.lang.String getAcceptLanguageInput();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.definitionInput"></a>

```java
public ServicecatalogServiceActionDefinition getDefinitionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceAction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogServiceActionConfig <a name="ServicecatalogServiceActionConfig" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_service_action.ServicecatalogServiceActionConfig;

ServicecatalogServiceActionConfig.builder()
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
    .definition(ServicecatalogServiceActionDefinition)
    .name(java.lang.String)
//  .acceptLanguage(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ServicecatalogServiceActionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.definition">definition</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a></code> | definition block. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#name ServicecatalogServiceAction#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#accept_language ServicecatalogServiceAction#accept_language}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#description ServicecatalogServiceAction#description}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#id ServicecatalogServiceAction#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.definition"></a>

```java
public ServicecatalogServiceActionDefinition getDefinition();
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>

definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#definition ServicecatalogServiceAction#definition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#name ServicecatalogServiceAction#name}.

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.acceptLanguage"></a>

```java
public java.lang.String getAcceptLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#accept_language ServicecatalogServiceAction#accept_language}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#description ServicecatalogServiceAction#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#id ServicecatalogServiceAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionConfig.property.timeouts"></a>

```java
public ServicecatalogServiceActionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#timeouts ServicecatalogServiceAction#timeouts}

---

### ServicecatalogServiceActionDefinition <a name="ServicecatalogServiceActionDefinition" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_service_action.ServicecatalogServiceActionDefinition;

ServicecatalogServiceActionDefinition.builder()
    .name(java.lang.String)
    .version(java.lang.String)
//  .assumeRole(java.lang.String)
//  .parameters(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#name ServicecatalogServiceAction#name}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#version ServicecatalogServiceAction#version}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.assumeRole">assumeRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#assume_role ServicecatalogServiceAction#assume_role}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#parameters ServicecatalogServiceAction#parameters}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#type ServicecatalogServiceAction#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#name ServicecatalogServiceAction#name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#version ServicecatalogServiceAction#version}.

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.assumeRole"></a>

```java
public java.lang.String getAssumeRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#assume_role ServicecatalogServiceAction#assume_role}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#parameters ServicecatalogServiceAction#parameters}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#type ServicecatalogServiceAction#type}.

---

### ServicecatalogServiceActionTimeouts <a name="ServicecatalogServiceActionTimeouts" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_service_action.ServicecatalogServiceActionTimeouts;

ServicecatalogServiceActionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#create ServicecatalogServiceAction#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#delete ServicecatalogServiceAction#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#read ServicecatalogServiceAction#read}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#update ServicecatalogServiceAction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#create ServicecatalogServiceAction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#delete ServicecatalogServiceAction#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#read ServicecatalogServiceAction#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action#update ServicecatalogServiceAction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogServiceActionDefinitionOutputReference <a name="ServicecatalogServiceActionDefinitionOutputReference" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_service_action.ServicecatalogServiceActionDefinitionOutputReference;

new ServicecatalogServiceActionDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetAssumeRole">resetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssumeRole` <a name="resetAssumeRole" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetAssumeRole"></a>

```java
public void resetAssumeRole()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.assumeRoleInput">assumeRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.assumeRole">assumeRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.assumeRoleInput"></a>

```java
public java.lang.String getAssumeRoleInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `assumeRole`<sup>Required</sup> <a name="assumeRole" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.assumeRole"></a>

```java
public java.lang.String getAssumeRole();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinitionOutputReference.property.internalValue"></a>

```java
public ServicecatalogServiceActionDefinition getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionDefinition">ServicecatalogServiceActionDefinition</a>

---


### ServicecatalogServiceActionTimeoutsOutputReference <a name="ServicecatalogServiceActionTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.servicecatalog_service_action.ServicecatalogServiceActionTimeoutsOutputReference;

new ServicecatalogServiceActionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogServiceAction.ServicecatalogServiceActionTimeouts">ServicecatalogServiceActionTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



