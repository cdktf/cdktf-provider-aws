# `auditmanagerAccountRegistration` Submodule <a name="`auditmanagerAccountRegistration` Submodule" id="@cdktf/provider-aws.auditmanagerAccountRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAccountRegistration <a name="AuditmanagerAccountRegistration" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_account_registration aws_auditmanager_account_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_account_registration.AuditmanagerAccountRegistration;

AuditmanagerAccountRegistration.Builder.create(Construct scope, java.lang.String id)
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
//  .delegatedAdminAccount(java.lang.String)
//  .deregisterOnDestroy(java.lang.Boolean)
//  .deregisterOnDestroy(IResolvable)
//  .kmsKey(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.delegatedAdminAccount">delegatedAdminAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_account_registration#delegated_admin_account AuditmanagerAccountRegistration#delegated_admin_account}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.deregisterOnDestroy">deregisterOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_account_registration#deregister_on_destroy AuditmanagerAccountRegistration#deregister_on_destroy}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_account_registration#kms_key AuditmanagerAccountRegistration#kms_key}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `delegatedAdminAccount`<sup>Optional</sup> <a name="delegatedAdminAccount" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.delegatedAdminAccount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_account_registration#delegated_admin_account AuditmanagerAccountRegistration#delegated_admin_account}.

---

##### `deregisterOnDestroy`<sup>Optional</sup> <a name="deregisterOnDestroy" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.deregisterOnDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_account_registration#deregister_on_destroy AuditmanagerAccountRegistration#deregister_on_destroy}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_account_registration#kms_key AuditmanagerAccountRegistration#kms_key}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetDelegatedAdminAccount">resetDelegatedAdminAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetDeregisterOnDestroy">resetDeregisterOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDelegatedAdminAccount` <a name="resetDelegatedAdminAccount" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetDelegatedAdminAccount"></a>

```java
public void resetDelegatedAdminAccount()
```

##### `resetDeregisterOnDestroy` <a name="resetDeregisterOnDestroy" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetDeregisterOnDestroy"></a>

```java
public void resetDeregisterOnDestroy()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.resetKmsKey"></a>

```java
public void resetKmsKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_account_registration.AuditmanagerAccountRegistration;

AuditmanagerAccountRegistration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_account_registration.AuditmanagerAccountRegistration;

AuditmanagerAccountRegistration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_account_registration.AuditmanagerAccountRegistration;

AuditmanagerAccountRegistration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.delegatedAdminAccountInput">delegatedAdminAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.deregisterOnDestroyInput">deregisterOnDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.delegatedAdminAccount">delegatedAdminAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.deregisterOnDestroy">deregisterOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `delegatedAdminAccountInput`<sup>Optional</sup> <a name="delegatedAdminAccountInput" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.delegatedAdminAccountInput"></a>

```java
public java.lang.String getDelegatedAdminAccountInput();
```

- *Type:* java.lang.String

---

##### `deregisterOnDestroyInput`<sup>Optional</sup> <a name="deregisterOnDestroyInput" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.deregisterOnDestroyInput"></a>

```java
public java.lang.Object getDeregisterOnDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `delegatedAdminAccount`<sup>Required</sup> <a name="delegatedAdminAccount" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.delegatedAdminAccount"></a>

```java
public java.lang.String getDelegatedAdminAccount();
```

- *Type:* java.lang.String

---

##### `deregisterOnDestroy`<sup>Required</sup> <a name="deregisterOnDestroy" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.deregisterOnDestroy"></a>

```java
public java.lang.Object getDeregisterOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAccountRegistrationConfig <a name="AuditmanagerAccountRegistrationConfig" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_account_registration.AuditmanagerAccountRegistrationConfig;

AuditmanagerAccountRegistrationConfig.builder()
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
//  .delegatedAdminAccount(java.lang.String)
//  .deregisterOnDestroy(java.lang.Boolean)
//  .deregisterOnDestroy(IResolvable)
//  .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.delegatedAdminAccount">delegatedAdminAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_account_registration#delegated_admin_account AuditmanagerAccountRegistration#delegated_admin_account}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.deregisterOnDestroy">deregisterOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_account_registration#deregister_on_destroy AuditmanagerAccountRegistration#deregister_on_destroy}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_account_registration#kms_key AuditmanagerAccountRegistration#kms_key}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `delegatedAdminAccount`<sup>Optional</sup> <a name="delegatedAdminAccount" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.delegatedAdminAccount"></a>

```java
public java.lang.String getDelegatedAdminAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_account_registration#delegated_admin_account AuditmanagerAccountRegistration#delegated_admin_account}.

---

##### `deregisterOnDestroy`<sup>Optional</sup> <a name="deregisterOnDestroy" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.deregisterOnDestroy"></a>

```java
public java.lang.Object getDeregisterOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_account_registration#deregister_on_destroy AuditmanagerAccountRegistration#deregister_on_destroy}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-aws.auditmanagerAccountRegistration.AuditmanagerAccountRegistrationConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_account_registration#kms_key AuditmanagerAccountRegistration#kms_key}.

---



