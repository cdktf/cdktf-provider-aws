# `sesv2EmailIdentity` Submodule <a name="`sesv2EmailIdentity` Submodule" id="@cdktf/provider-aws.sesv2EmailIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2EmailIdentity <a name="Sesv2EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity aws_sesv2_email_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity.Sesv2EmailIdentity;

Sesv2EmailIdentity.Builder.create(Construct scope, java.lang.String id)
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
//  .configurationSetName(java.lang.String)
//  .dkimSigningAttributes(Sesv2EmailIdentityDkimSigningAttributes)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.emailIdentity">emailIdentity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.dkimSigningAttributes">dkimSigningAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | dkim_signing_attributes block. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#id Sesv2EmailIdentity#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags Sesv2EmailIdentity#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.emailIdentity"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}.

---

##### `configurationSetName`<sup>Optional</sup> <a name="configurationSetName" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.configurationSetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}.

---

##### `dkimSigningAttributes`<sup>Optional</sup> <a name="dkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.dkimSigningAttributes"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

dkim_signing_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#dkim_signing_attributes Sesv2EmailIdentity#dkim_signing_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#id Sesv2EmailIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags Sesv2EmailIdentity#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes">putDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetConfigurationSetName">resetConfigurationSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetDkimSigningAttributes">resetDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDkimSigningAttributes` <a name="putDkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes"></a>

```java
public void putDkimSigningAttributes(Sesv2EmailIdentityDkimSigningAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

---

##### `resetConfigurationSetName` <a name="resetConfigurationSetName" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetConfigurationSetName"></a>

```java
public void resetConfigurationSetName()
```

##### `resetDkimSigningAttributes` <a name="resetDkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetDkimSigningAttributes"></a>

```java
public void resetDkimSigningAttributes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity.Sesv2EmailIdentity;

Sesv2EmailIdentity.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity.Sesv2EmailIdentity;

Sesv2EmailIdentity.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity.Sesv2EmailIdentity;

Sesv2EmailIdentity.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributes">dkimSigningAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference">Sesv2EmailIdentityDkimSigningAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.verifiedForSendingStatus">verifiedForSendingStatus</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetNameInput">configurationSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributesInput">dkimSigningAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentityInput">emailIdentityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentity">emailIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dkimSigningAttributes`<sup>Required</sup> <a name="dkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributes"></a>

```java
public Sesv2EmailIdentityDkimSigningAttributesOutputReference getDkimSigningAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference">Sesv2EmailIdentityDkimSigningAttributesOutputReference</a>

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `verifiedForSendingStatus`<sup>Required</sup> <a name="verifiedForSendingStatus" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.verifiedForSendingStatus"></a>

```java
public IResolvable getVerifiedForSendingStatus();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `configurationSetNameInput`<sup>Optional</sup> <a name="configurationSetNameInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetNameInput"></a>

```java
public java.lang.String getConfigurationSetNameInput();
```

- *Type:* java.lang.String

---

##### `dkimSigningAttributesInput`<sup>Optional</sup> <a name="dkimSigningAttributesInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributesInput"></a>

```java
public Sesv2EmailIdentityDkimSigningAttributes getDkimSigningAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

---

##### `emailIdentityInput`<sup>Optional</sup> <a name="emailIdentityInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentityInput"></a>

```java
public java.lang.String getEmailIdentityInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetName"></a>

```java
public java.lang.String getConfigurationSetName();
```

- *Type:* java.lang.String

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentity"></a>

```java
public java.lang.String getEmailIdentity();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2EmailIdentityConfig <a name="Sesv2EmailIdentityConfig" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity.Sesv2EmailIdentityConfig;

Sesv2EmailIdentityConfig.builder()
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
//  .configurationSetName(java.lang.String)
//  .dkimSigningAttributes(Sesv2EmailIdentityDkimSigningAttributes)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.emailIdentity">emailIdentity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.configurationSetName">configurationSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dkimSigningAttributes">dkimSigningAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | dkim_signing_attributes block. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#id Sesv2EmailIdentity#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags Sesv2EmailIdentity#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.emailIdentity"></a>

```java
public java.lang.String getEmailIdentity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}.

---

##### `configurationSetName`<sup>Optional</sup> <a name="configurationSetName" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.configurationSetName"></a>

```java
public java.lang.String getConfigurationSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}.

---

##### `dkimSigningAttributes`<sup>Optional</sup> <a name="dkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dkimSigningAttributes"></a>

```java
public Sesv2EmailIdentityDkimSigningAttributes getDkimSigningAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

dkim_signing_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#dkim_signing_attributes Sesv2EmailIdentity#dkim_signing_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#id Sesv2EmailIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags Sesv2EmailIdentity#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}.

---

### Sesv2EmailIdentityDkimSigningAttributes <a name="Sesv2EmailIdentityDkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity.Sesv2EmailIdentityDkimSigningAttributes;

Sesv2EmailIdentityDkimSigningAttributes.builder()
//  .domainSigningPrivateKey(java.lang.String)
//  .domainSigningSelector(java.lang.String)
//  .nextSigningKeyLength(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey">domainSigningPrivateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_private_key Sesv2EmailIdentity#domain_signing_private_key}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningSelector">domainSigningSelector</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_selector Sesv2EmailIdentity#domain_signing_selector}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.nextSigningKeyLength">nextSigningKeyLength</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#next_signing_key_length Sesv2EmailIdentity#next_signing_key_length}. |

---

##### `domainSigningPrivateKey`<sup>Optional</sup> <a name="domainSigningPrivateKey" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey"></a>

```java
public java.lang.String getDomainSigningPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_private_key Sesv2EmailIdentity#domain_signing_private_key}.

---

##### `domainSigningSelector`<sup>Optional</sup> <a name="domainSigningSelector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningSelector"></a>

```java
public java.lang.String getDomainSigningSelector();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_selector Sesv2EmailIdentity#domain_signing_selector}.

---

##### `nextSigningKeyLength`<sup>Optional</sup> <a name="nextSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.nextSigningKeyLength"></a>

```java
public java.lang.String getNextSigningKeyLength();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#next_signing_key_length Sesv2EmailIdentity#next_signing_key_length}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2EmailIdentityDkimSigningAttributesOutputReference <a name="Sesv2EmailIdentityDkimSigningAttributesOutputReference" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.sesv2_email_identity.Sesv2EmailIdentityDkimSigningAttributesOutputReference;

new Sesv2EmailIdentityDkimSigningAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey">resetDomainSigningPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector">resetDomainSigningSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength">resetNextSigningKeyLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainSigningPrivateKey` <a name="resetDomainSigningPrivateKey" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey"></a>

```java
public void resetDomainSigningPrivateKey()
```

##### `resetDomainSigningSelector` <a name="resetDomainSigningSelector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector"></a>

```java
public void resetDomainSigningSelector()
```

##### `resetNextSigningKeyLength` <a name="resetNextSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength"></a>

```java
public void resetNextSigningKeyLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength">currentSigningKeyLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp">lastKeyGenerationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin">signingAttributesOrigin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens">tokens</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput">domainSigningPrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput">domainSigningSelectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput">nextSigningKeyLengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey">domainSigningPrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector">domainSigningSelector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength">nextSigningKeyLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `currentSigningKeyLength`<sup>Required</sup> <a name="currentSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength"></a>

```java
public java.lang.String getCurrentSigningKeyLength();
```

- *Type:* java.lang.String

---

##### `lastKeyGenerationTimestamp`<sup>Required</sup> <a name="lastKeyGenerationTimestamp" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp"></a>

```java
public java.lang.String getLastKeyGenerationTimestamp();
```

- *Type:* java.lang.String

---

##### `signingAttributesOrigin`<sup>Required</sup> <a name="signingAttributesOrigin" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin"></a>

```java
public java.lang.String getSigningAttributesOrigin();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens"></a>

```java
public java.util.List<java.lang.String> getTokens();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainSigningPrivateKeyInput`<sup>Optional</sup> <a name="domainSigningPrivateKeyInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput"></a>

```java
public java.lang.String getDomainSigningPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `domainSigningSelectorInput`<sup>Optional</sup> <a name="domainSigningSelectorInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput"></a>

```java
public java.lang.String getDomainSigningSelectorInput();
```

- *Type:* java.lang.String

---

##### `nextSigningKeyLengthInput`<sup>Optional</sup> <a name="nextSigningKeyLengthInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput"></a>

```java
public java.lang.String getNextSigningKeyLengthInput();
```

- *Type:* java.lang.String

---

##### `domainSigningPrivateKey`<sup>Required</sup> <a name="domainSigningPrivateKey" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey"></a>

```java
public java.lang.String getDomainSigningPrivateKey();
```

- *Type:* java.lang.String

---

##### `domainSigningSelector`<sup>Required</sup> <a name="domainSigningSelector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector"></a>

```java
public java.lang.String getDomainSigningSelector();
```

- *Type:* java.lang.String

---

##### `nextSigningKeyLength`<sup>Required</sup> <a name="nextSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength"></a>

```java
public java.lang.String getNextSigningKeyLength();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue"></a>

```java
public Sesv2EmailIdentityDkimSigningAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

---



