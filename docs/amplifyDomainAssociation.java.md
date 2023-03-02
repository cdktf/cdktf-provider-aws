# `amplifyDomainAssociation` Submodule <a name="`amplifyDomainAssociation` Submodule" id="@cdktf/provider-aws.amplifyDomainAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyDomainAssociation <a name="AmplifyDomainAssociation" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association aws_amplify_domain_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.amplify_domain_association.AmplifyDomainAssociation;

AmplifyDomainAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .appId(java.lang.String)
    .domainName(java.lang.String)
    .subDomain(IResolvable)
    .subDomain(java.util.List<AmplifyDomainAssociationSubDomain>)
//  .id(java.lang.String)
//  .waitForVerification(java.lang.Boolean)
//  .waitForVerification(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#app_id AmplifyDomainAssociation#app_id}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#domain_name AmplifyDomainAssociation#domain_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.subDomain">subDomain</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>></code> | sub_domain block. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#id AmplifyDomainAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.waitForVerification">waitForVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#wait_for_verification AmplifyDomainAssociation#wait_for_verification}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#app_id AmplifyDomainAssociation#app_id}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#domain_name AmplifyDomainAssociation#domain_name}.

---

##### `subDomain`<sup>Required</sup> <a name="subDomain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.subDomain"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>>

sub_domain block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#sub_domain AmplifyDomainAssociation#sub_domain}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#id AmplifyDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `waitForVerification`<sup>Optional</sup> <a name="waitForVerification" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.waitForVerification"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#wait_for_verification AmplifyDomainAssociation#wait_for_verification}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putSubDomain">putSubDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetWaitForVerification">resetWaitForVerification</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSubDomain` <a name="putSubDomain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putSubDomain"></a>

```java
public void putSubDomain(IResolvable OR java.util.List<AmplifyDomainAssociationSubDomain> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putSubDomain.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetWaitForVerification` <a name="resetWaitForVerification" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetWaitForVerification"></a>

```java
public void resetWaitForVerification()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.amplify_domain_association.AmplifyDomainAssociation;

AmplifyDomainAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.amplify_domain_association.AmplifyDomainAssociation;

AmplifyDomainAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.amplify_domain_association.AmplifyDomainAssociation;

AmplifyDomainAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.certificateVerificationDnsRecord">certificateVerificationDnsRecord</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.subDomain">subDomain</a></code> | <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList">AmplifyDomainAssociationSubDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.subDomainInput">subDomainInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.waitForVerificationInput">waitForVerificationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.waitForVerification">waitForVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `certificateVerificationDnsRecord`<sup>Required</sup> <a name="certificateVerificationDnsRecord" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.certificateVerificationDnsRecord"></a>

```java
public java.lang.String getCertificateVerificationDnsRecord();
```

- *Type:* java.lang.String

---

##### `subDomain`<sup>Required</sup> <a name="subDomain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.subDomain"></a>

```java
public AmplifyDomainAssociationSubDomainList getSubDomain();
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList">AmplifyDomainAssociationSubDomainList</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `subDomainInput`<sup>Optional</sup> <a name="subDomainInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.subDomainInput"></a>

```java
public java.lang.Object getSubDomainInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>>

---

##### `waitForVerificationInput`<sup>Optional</sup> <a name="waitForVerificationInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.waitForVerificationInput"></a>

```java
public java.lang.Object getWaitForVerificationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `waitForVerification`<sup>Required</sup> <a name="waitForVerification" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.waitForVerification"></a>

```java
public java.lang.Object getWaitForVerification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyDomainAssociationConfig <a name="AmplifyDomainAssociationConfig" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.amplify_domain_association.AmplifyDomainAssociationConfig;

AmplifyDomainAssociationConfig.builder()
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
    .appId(java.lang.String)
    .domainName(java.lang.String)
    .subDomain(IResolvable)
    .subDomain(java.util.List<AmplifyDomainAssociationSubDomain>)
//  .id(java.lang.String)
//  .waitForVerification(java.lang.Boolean)
//  .waitForVerification(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#app_id AmplifyDomainAssociation#app_id}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#domain_name AmplifyDomainAssociation#domain_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.subDomain">subDomain</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>></code> | sub_domain block. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#id AmplifyDomainAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.waitForVerification">waitForVerification</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#wait_for_verification AmplifyDomainAssociation#wait_for_verification}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#app_id AmplifyDomainAssociation#app_id}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#domain_name AmplifyDomainAssociation#domain_name}.

---

##### `subDomain`<sup>Required</sup> <a name="subDomain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.subDomain"></a>

```java
public java.lang.Object getSubDomain();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>>

sub_domain block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#sub_domain AmplifyDomainAssociation#sub_domain}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#id AmplifyDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `waitForVerification`<sup>Optional</sup> <a name="waitForVerification" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.waitForVerification"></a>

```java
public java.lang.Object getWaitForVerification();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#wait_for_verification AmplifyDomainAssociation#wait_for_verification}.

---

### AmplifyDomainAssociationSubDomain <a name="AmplifyDomainAssociationSubDomain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.amplify_domain_association.AmplifyDomainAssociationSubDomain;

AmplifyDomainAssociationSubDomain.builder()
    .branchName(java.lang.String)
    .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain.property.branchName">branchName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#branch_name AmplifyDomainAssociation#branch_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#prefix AmplifyDomainAssociation#prefix}. |

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#branch_name AmplifyDomainAssociation#branch_name}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association#prefix AmplifyDomainAssociation#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmplifyDomainAssociationSubDomainList <a name="AmplifyDomainAssociationSubDomainList" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.amplify_domain_association.AmplifyDomainAssociationSubDomainList;

new AmplifyDomainAssociationSubDomainList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.get"></a>

```java
public AmplifyDomainAssociationSubDomainOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>>

---


### AmplifyDomainAssociationSubDomainOutputReference <a name="AmplifyDomainAssociationSubDomainOutputReference" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.amplify_domain_association.AmplifyDomainAssociationSubDomainOutputReference;

new AmplifyDomainAssociationSubDomainOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.dnsRecord">dnsRecord</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.verified">verified</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.branchNameInput">branchNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.branchName">branchName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsRecord`<sup>Required</sup> <a name="dnsRecord" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.dnsRecord"></a>

```java
public java.lang.String getDnsRecord();
```

- *Type:* java.lang.String

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.verified"></a>

```java
public IResolvable getVerified();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.branchNameInput"></a>

```java
public java.lang.String getBranchNameInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.branchName"></a>

```java
public java.lang.String getBranchName();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a> OR com.hashicorp.cdktf.IResolvable

---



