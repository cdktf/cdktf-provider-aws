# `sesv2EmailIdentityMailFromAttributes` Submodule <a name="`sesv2EmailIdentityMailFromAttributes` Submodule" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2EmailIdentityMailFromAttributes <a name="Sesv2EmailIdentityMailFromAttributes" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes aws_sesv2_email_identity_mail_from_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity_mail_from_attributes.Sesv2EmailIdentityMailFromAttributes;

Sesv2EmailIdentityMailFromAttributes.Builder.create(Construct scope, java.lang.String id)
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
    .emailIdentity(java.lang.String)
//  .behaviorOnMxFailure(java.lang.String)
//  .id(java.lang.String)
//  .mailFromDomain(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.emailIdentity">emailIdentity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#email_identity Sesv2EmailIdentityMailFromAttributes#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.behaviorOnMxFailure">behaviorOnMxFailure</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#behavior_on_mx_failure Sesv2EmailIdentityMailFromAttributes#behavior_on_mx_failure}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#id Sesv2EmailIdentityMailFromAttributes#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.mailFromDomain">mailFromDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#mail_from_domain Sesv2EmailIdentityMailFromAttributes#mail_from_domain}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.emailIdentity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#email_identity Sesv2EmailIdentityMailFromAttributes#email_identity}.

---

##### `behaviorOnMxFailure`<sup>Optional</sup> <a name="behaviorOnMxFailure" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.behaviorOnMxFailure"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#behavior_on_mx_failure Sesv2EmailIdentityMailFromAttributes#behavior_on_mx_failure}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#id Sesv2EmailIdentityMailFromAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mailFromDomain`<sup>Optional</sup> <a name="mailFromDomain" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.Initializer.parameter.mailFromDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#mail_from_domain Sesv2EmailIdentityMailFromAttributes#mail_from_domain}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetBehaviorOnMxFailure">resetBehaviorOnMxFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetMailFromDomain">resetMailFromDomain</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBehaviorOnMxFailure` <a name="resetBehaviorOnMxFailure" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetBehaviorOnMxFailure"></a>

```java
public void resetBehaviorOnMxFailure()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetId"></a>

```java
public void resetId()
```

##### `resetMailFromDomain` <a name="resetMailFromDomain" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.resetMailFromDomain"></a>

```java
public void resetMailFromDomain()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity_mail_from_attributes.Sesv2EmailIdentityMailFromAttributes;

Sesv2EmailIdentityMailFromAttributes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity_mail_from_attributes.Sesv2EmailIdentityMailFromAttributes;

Sesv2EmailIdentityMailFromAttributes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity_mail_from_attributes.Sesv2EmailIdentityMailFromAttributes;

Sesv2EmailIdentityMailFromAttributes.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.behaviorOnMxFailureInput">behaviorOnMxFailureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.emailIdentityInput">emailIdentityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.mailFromDomainInput">mailFromDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.behaviorOnMxFailure">behaviorOnMxFailure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.emailIdentity">emailIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.mailFromDomain">mailFromDomain</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `behaviorOnMxFailureInput`<sup>Optional</sup> <a name="behaviorOnMxFailureInput" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.behaviorOnMxFailureInput"></a>

```java
public java.lang.String getBehaviorOnMxFailureInput();
```

- *Type:* java.lang.String

---

##### `emailIdentityInput`<sup>Optional</sup> <a name="emailIdentityInput" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.emailIdentityInput"></a>

```java
public java.lang.String getEmailIdentityInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mailFromDomainInput`<sup>Optional</sup> <a name="mailFromDomainInput" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.mailFromDomainInput"></a>

```java
public java.lang.String getMailFromDomainInput();
```

- *Type:* java.lang.String

---

##### `behaviorOnMxFailure`<sup>Required</sup> <a name="behaviorOnMxFailure" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.behaviorOnMxFailure"></a>

```java
public java.lang.String getBehaviorOnMxFailure();
```

- *Type:* java.lang.String

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.emailIdentity"></a>

```java
public java.lang.String getEmailIdentity();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mailFromDomain`<sup>Required</sup> <a name="mailFromDomain" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.mailFromDomain"></a>

```java
public java.lang.String getMailFromDomain();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2EmailIdentityMailFromAttributesConfig <a name="Sesv2EmailIdentityMailFromAttributesConfig" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity_mail_from_attributes.Sesv2EmailIdentityMailFromAttributesConfig;

Sesv2EmailIdentityMailFromAttributesConfig.builder()
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
    .emailIdentity(java.lang.String)
//  .behaviorOnMxFailure(java.lang.String)
//  .id(java.lang.String)
//  .mailFromDomain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.emailIdentity">emailIdentity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#email_identity Sesv2EmailIdentityMailFromAttributes#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.behaviorOnMxFailure">behaviorOnMxFailure</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#behavior_on_mx_failure Sesv2EmailIdentityMailFromAttributes#behavior_on_mx_failure}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#id Sesv2EmailIdentityMailFromAttributes#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.mailFromDomain">mailFromDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#mail_from_domain Sesv2EmailIdentityMailFromAttributes#mail_from_domain}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.emailIdentity"></a>

```java
public java.lang.String getEmailIdentity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#email_identity Sesv2EmailIdentityMailFromAttributes#email_identity}.

---

##### `behaviorOnMxFailure`<sup>Optional</sup> <a name="behaviorOnMxFailure" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.behaviorOnMxFailure"></a>

```java
public java.lang.String getBehaviorOnMxFailure();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#behavior_on_mx_failure Sesv2EmailIdentityMailFromAttributes#behavior_on_mx_failure}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#id Sesv2EmailIdentityMailFromAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mailFromDomain`<sup>Optional</sup> <a name="mailFromDomain" id="@cdktf/provider-aws.sesv2EmailIdentityMailFromAttributes.Sesv2EmailIdentityMailFromAttributesConfig.property.mailFromDomain"></a>

```java
public java.lang.String getMailFromDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity_mail_from_attributes#mail_from_domain Sesv2EmailIdentityMailFromAttributes#mail_from_domain}.

---



