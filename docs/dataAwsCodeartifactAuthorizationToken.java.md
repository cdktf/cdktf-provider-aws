# `dataAwsCodeartifactAuthorizationToken` Submodule <a name="`dataAwsCodeartifactAuthorizationToken` Submodule" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodeartifactAuthorizationToken <a name="DataAwsCodeartifactAuthorizationToken" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token aws_codeartifact_authorization_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_codeartifact_authorization_token.DataAwsCodeartifactAuthorizationToken;

DataAwsCodeartifactAuthorizationToken.Builder.create(Construct scope, java.lang.String id)
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
    .domain(java.lang.String)
//  .domainOwner(java.lang.String)
//  .durationSeconds(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#domain DataAwsCodeartifactAuthorizationToken#domain}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.domainOwner">domainOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#domain_owner DataAwsCodeartifactAuthorizationToken#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#duration_seconds DataAwsCodeartifactAuthorizationToken#duration_seconds}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#id DataAwsCodeartifactAuthorizationToken#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#domain DataAwsCodeartifactAuthorizationToken#domain}.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.domainOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#domain_owner DataAwsCodeartifactAuthorizationToken#domain_owner}.

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.durationSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#duration_seconds DataAwsCodeartifactAuthorizationToken#duration_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#id DataAwsCodeartifactAuthorizationToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetDomainOwner">resetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDomainOwner` <a name="resetDomainOwner" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetDomainOwner"></a>

```java
public void resetDomainOwner()
```

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetDurationSeconds"></a>

```java
public void resetDurationSeconds()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_codeartifact_authorization_token.DataAwsCodeartifactAuthorizationToken;

DataAwsCodeartifactAuthorizationToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_codeartifact_authorization_token.DataAwsCodeartifactAuthorizationToken;

DataAwsCodeartifactAuthorizationToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_codeartifact_authorization_token.DataAwsCodeartifactAuthorizationToken;

DataAwsCodeartifactAuthorizationToken.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.authorizationToken">authorizationToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.expiration">expiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domainOwnerInput">domainOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.durationSecondsInput">durationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domainOwner">domainOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `authorizationToken`<sup>Required</sup> <a name="authorizationToken" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.authorizationToken"></a>

```java
public java.lang.String getAuthorizationToken();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `domainOwnerInput`<sup>Optional</sup> <a name="domainOwnerInput" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domainOwnerInput"></a>

```java
public java.lang.String getDomainOwnerInput();
```

- *Type:* java.lang.String

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.durationSecondsInput"></a>

```java
public java.lang.Number getDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `domainOwner`<sup>Required</sup> <a name="domainOwner" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.domainOwner"></a>

```java
public java.lang.String getDomainOwner();
```

- *Type:* java.lang.String

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodeartifactAuthorizationTokenConfig <a name="DataAwsCodeartifactAuthorizationTokenConfig" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_codeartifact_authorization_token.DataAwsCodeartifactAuthorizationTokenConfig;

DataAwsCodeartifactAuthorizationTokenConfig.builder()
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
    .domain(java.lang.String)
//  .domainOwner(java.lang.String)
//  .durationSeconds(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#domain DataAwsCodeartifactAuthorizationToken#domain}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.domainOwner">domainOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#domain_owner DataAwsCodeartifactAuthorizationToken#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.durationSeconds">durationSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#duration_seconds DataAwsCodeartifactAuthorizationToken#duration_seconds}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#id DataAwsCodeartifactAuthorizationToken#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#domain DataAwsCodeartifactAuthorizationToken#domain}.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.domainOwner"></a>

```java
public java.lang.String getDomainOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#domain_owner DataAwsCodeartifactAuthorizationToken#domain_owner}.

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.durationSeconds"></a>

```java
public java.lang.Number getDurationSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#duration_seconds DataAwsCodeartifactAuthorizationToken#duration_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactAuthorizationToken.DataAwsCodeartifactAuthorizationTokenConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token#id DataAwsCodeartifactAuthorizationToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



