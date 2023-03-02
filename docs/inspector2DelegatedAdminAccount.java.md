# `inspector2DelegatedAdminAccount` Submodule <a name="`inspector2DelegatedAdminAccount` Submodule" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspector2DelegatedAdminAccount <a name="Inspector2DelegatedAdminAccount" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account aws_inspector2_delegated_admin_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_delegated_admin_account.Inspector2DelegatedAdminAccount;

Inspector2DelegatedAdminAccount.Builder.create(Construct scope, java.lang.String id)
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
    .accountId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(Inspector2DelegatedAdminAccountTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#timeouts Inspector2DelegatedAdminAccount#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts"></a>

```java
public void putTimeouts(Inspector2DelegatedAdminAccountTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_delegated_admin_account.Inspector2DelegatedAdminAccount;

Inspector2DelegatedAdminAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_delegated_admin_account.Inspector2DelegatedAdminAccount;

Inspector2DelegatedAdminAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_delegated_admin_account.Inspector2DelegatedAdminAccount;

Inspector2DelegatedAdminAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.relationshipStatus">relationshipStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference">Inspector2DelegatedAdminAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `relationshipStatus`<sup>Required</sup> <a name="relationshipStatus" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.relationshipStatus"></a>

```java
public java.lang.String getRelationshipStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeouts"></a>

```java
public Inspector2DelegatedAdminAccountTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference">Inspector2DelegatedAdminAccountTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Inspector2DelegatedAdminAccountConfig <a name="Inspector2DelegatedAdminAccountConfig" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_delegated_admin_account.Inspector2DelegatedAdminAccountConfig;

Inspector2DelegatedAdminAccountConfig.builder()
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
    .accountId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(Inspector2DelegatedAdminAccountTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.timeouts"></a>

```java
public Inspector2DelegatedAdminAccountTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#timeouts Inspector2DelegatedAdminAccount#timeouts}

---

### Inspector2DelegatedAdminAccountTimeouts <a name="Inspector2DelegatedAdminAccountTimeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_delegated_admin_account.Inspector2DelegatedAdminAccountTimeouts;

Inspector2DelegatedAdminAccountTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#create Inspector2DelegatedAdminAccount#create}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#delete Inspector2DelegatedAdminAccount#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#create Inspector2DelegatedAdminAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#delete Inspector2DelegatedAdminAccount#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspector2DelegatedAdminAccountTimeoutsOutputReference <a name="Inspector2DelegatedAdminAccountTimeoutsOutputReference" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.inspector2_delegated_admin_account.Inspector2DelegatedAdminAccountTimeoutsOutputReference;

new Inspector2DelegatedAdminAccountTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



