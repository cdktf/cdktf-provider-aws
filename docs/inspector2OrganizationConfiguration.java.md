# `inspector2OrganizationConfiguration` Submodule <a name="`inspector2OrganizationConfiguration` Submodule" id="@cdktf/provider-aws.inspector2OrganizationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspector2OrganizationConfiguration <a name="Inspector2OrganizationConfiguration" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration aws_inspector2_organization_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_organization_configuration.Inspector2OrganizationConfiguration;

Inspector2OrganizationConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .autoEnable(Inspector2OrganizationConfigurationAutoEnable)
//  .id(java.lang.String)
//  .timeouts(Inspector2OrganizationConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.autoEnable">autoEnable</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a></code> | auto_enable block. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#id Inspector2OrganizationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.autoEnable"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a>

auto_enable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#auto_enable Inspector2OrganizationConfiguration#auto_enable}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#id Inspector2OrganizationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#timeouts Inspector2OrganizationConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putAutoEnable">putAutoEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAutoEnable` <a name="putAutoEnable" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putAutoEnable"></a>

```java
public void putAutoEnable(Inspector2OrganizationConfigurationAutoEnable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putAutoEnable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putTimeouts"></a>

```java
public void putTimeouts(Inspector2OrganizationConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_organization_configuration.Inspector2OrganizationConfiguration;

Inspector2OrganizationConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_organization_configuration.Inspector2OrganizationConfiguration;

Inspector2OrganizationConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_organization_configuration.Inspector2OrganizationConfiguration;

Inspector2OrganizationConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.autoEnable">autoEnable</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference">Inspector2OrganizationConfigurationAutoEnableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.maxAccountLimitReached">maxAccountLimitReached</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference">Inspector2OrganizationConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.autoEnableInput">autoEnableInput</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.autoEnable"></a>

```java
public Inspector2OrganizationConfigurationAutoEnableOutputReference getAutoEnable();
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference">Inspector2OrganizationConfigurationAutoEnableOutputReference</a>

---

##### `maxAccountLimitReached`<sup>Required</sup> <a name="maxAccountLimitReached" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.maxAccountLimitReached"></a>

```java
public IResolvable getMaxAccountLimitReached();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.timeouts"></a>

```java
public Inspector2OrganizationConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference">Inspector2OrganizationConfigurationTimeoutsOutputReference</a>

---

##### `autoEnableInput`<sup>Optional</sup> <a name="autoEnableInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.autoEnableInput"></a>

```java
public Inspector2OrganizationConfigurationAutoEnable getAutoEnableInput();
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Inspector2OrganizationConfigurationAutoEnable <a name="Inspector2OrganizationConfigurationAutoEnable" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_organization_configuration.Inspector2OrganizationConfigurationAutoEnable;

Inspector2OrganizationConfigurationAutoEnable.builder()
    .ec2(java.lang.Boolean)
    .ec2(IResolvable)
    .ecr(java.lang.Boolean)
    .ecr(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.ec2">ec2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#ec2 Inspector2OrganizationConfiguration#ec2}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.ecr">ecr</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#ecr Inspector2OrganizationConfiguration#ecr}. |

---

##### `ec2`<sup>Required</sup> <a name="ec2" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.ec2"></a>

```java
public java.lang.Object getEc2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#ec2 Inspector2OrganizationConfiguration#ec2}.

---

##### `ecr`<sup>Required</sup> <a name="ecr" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable.property.ecr"></a>

```java
public java.lang.Object getEcr();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#ecr Inspector2OrganizationConfiguration#ecr}.

---

### Inspector2OrganizationConfigurationConfig <a name="Inspector2OrganizationConfigurationConfig" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_organization_configuration.Inspector2OrganizationConfigurationConfig;

Inspector2OrganizationConfigurationConfig.builder()
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
    .autoEnable(Inspector2OrganizationConfigurationAutoEnable)
//  .id(java.lang.String)
//  .timeouts(Inspector2OrganizationConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.autoEnable">autoEnable</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a></code> | auto_enable block. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#id Inspector2OrganizationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.autoEnable"></a>

```java
public Inspector2OrganizationConfigurationAutoEnable getAutoEnable();
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a>

auto_enable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#auto_enable Inspector2OrganizationConfiguration#auto_enable}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#id Inspector2OrganizationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationConfig.property.timeouts"></a>

```java
public Inspector2OrganizationConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#timeouts Inspector2OrganizationConfiguration#timeouts}

---

### Inspector2OrganizationConfigurationTimeouts <a name="Inspector2OrganizationConfigurationTimeouts" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_organization_configuration.Inspector2OrganizationConfigurationTimeouts;

Inspector2OrganizationConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#create Inspector2OrganizationConfiguration#create}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#delete Inspector2OrganizationConfiguration#delete}. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#update Inspector2OrganizationConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#create Inspector2OrganizationConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#delete Inspector2OrganizationConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_organization_configuration#update Inspector2OrganizationConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspector2OrganizationConfigurationAutoEnableOutputReference <a name="Inspector2OrganizationConfigurationAutoEnableOutputReference" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_organization_configuration.Inspector2OrganizationConfigurationAutoEnableOutputReference;

new Inspector2OrganizationConfigurationAutoEnableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ec2Input">ec2Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ecrInput">ecrInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ec2">ec2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ecr">ecr</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ec2Input`<sup>Optional</sup> <a name="ec2Input" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ec2Input"></a>

```java
public java.lang.Object getEc2Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ecrInput`<sup>Optional</sup> <a name="ecrInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ecrInput"></a>

```java
public java.lang.Object getEcrInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ec2`<sup>Required</sup> <a name="ec2" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ec2"></a>

```java
public java.lang.Object getEc2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ecr`<sup>Required</sup> <a name="ecr" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.ecr"></a>

```java
public java.lang.Object getEcr();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnableOutputReference.property.internalValue"></a>

```java
public Inspector2OrganizationConfigurationAutoEnable getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationAutoEnable">Inspector2OrganizationConfigurationAutoEnable</a>

---


### Inspector2OrganizationConfigurationTimeoutsOutputReference <a name="Inspector2OrganizationConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_organization_configuration.Inspector2OrganizationConfigurationTimeoutsOutputReference;

new Inspector2OrganizationConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2OrganizationConfiguration.Inspector2OrganizationConfigurationTimeouts">Inspector2OrganizationConfigurationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



