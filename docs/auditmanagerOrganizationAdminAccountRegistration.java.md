# `auditmanagerOrganizationAdminAccountRegistration` Submodule <a name="`auditmanagerOrganizationAdminAccountRegistration` Submodule" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerOrganizationAdminAccountRegistration <a name="AuditmanagerOrganizationAdminAccountRegistration" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration aws_auditmanager_organization_admin_account_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_organization_admin_account_registration.AuditmanagerOrganizationAdminAccountRegistration;

AuditmanagerOrganizationAdminAccountRegistration.Builder.create(Construct scope, java.lang.String id)
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
    .adminAccountId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.adminAccountId">adminAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration#admin_account_id AuditmanagerOrganizationAdminAccountRegistration#admin_account_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminAccountId`<sup>Required</sup> <a name="adminAccountId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.Initializer.parameter.adminAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration#admin_account_id AuditmanagerOrganizationAdminAccountRegistration#admin_account_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_organization_admin_account_registration.AuditmanagerOrganizationAdminAccountRegistration;

AuditmanagerOrganizationAdminAccountRegistration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_organization_admin_account_registration.AuditmanagerOrganizationAdminAccountRegistration;

AuditmanagerOrganizationAdminAccountRegistration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_organization_admin_account_registration.AuditmanagerOrganizationAdminAccountRegistration;

AuditmanagerOrganizationAdminAccountRegistration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountIdInput">adminAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountId">adminAccountId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `adminAccountIdInput`<sup>Optional</sup> <a name="adminAccountIdInput" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountIdInput"></a>

```java
public java.lang.String getAdminAccountIdInput();
```

- *Type:* java.lang.String

---

##### `adminAccountId`<sup>Required</sup> <a name="adminAccountId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.adminAccountId"></a>

```java
public java.lang.String getAdminAccountId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerOrganizationAdminAccountRegistrationConfig <a name="AuditmanagerOrganizationAdminAccountRegistrationConfig" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.auditmanager_organization_admin_account_registration.AuditmanagerOrganizationAdminAccountRegistrationConfig;

AuditmanagerOrganizationAdminAccountRegistrationConfig.builder()
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
    .adminAccountId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.adminAccountId">adminAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration#admin_account_id AuditmanagerOrganizationAdminAccountRegistration#admin_account_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminAccountId`<sup>Required</sup> <a name="adminAccountId" id="@cdktf/provider-aws.auditmanagerOrganizationAdminAccountRegistration.AuditmanagerOrganizationAdminAccountRegistrationConfig.property.adminAccountId"></a>

```java
public java.lang.String getAdminAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_organization_admin_account_registration#admin_account_id AuditmanagerOrganizationAdminAccountRegistration#admin_account_id}.

---



