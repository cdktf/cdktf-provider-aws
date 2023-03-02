# `dataAwsCodeartifactRepositoryEndpoint` Submodule <a name="`dataAwsCodeartifactRepositoryEndpoint` Submodule" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodeartifactRepositoryEndpoint <a name="DataAwsCodeartifactRepositoryEndpoint" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint aws_codeartifact_repository_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_codeartifact_repository_endpoint.DataAwsCodeartifactRepositoryEndpoint;

DataAwsCodeartifactRepositoryEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .format(java.lang.String)
    .repository(java.lang.String)
//  .domainOwner(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.domainOwner">domainOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.format"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.domainOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetDomainOwner">resetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDomainOwner` <a name="resetDomainOwner" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetDomainOwner"></a>

```java
public void resetDomainOwner()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_codeartifact_repository_endpoint.DataAwsCodeartifactRepositoryEndpoint;

DataAwsCodeartifactRepositoryEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_codeartifact_repository_endpoint.DataAwsCodeartifactRepositoryEndpoint;

DataAwsCodeartifactRepositoryEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_codeartifact_repository_endpoint.DataAwsCodeartifactRepositoryEndpoint;

DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryEndpoint">repositoryEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwnerInput">domainOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwner">domainOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `repositoryEndpoint`<sup>Required</sup> <a name="repositoryEndpoint" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryEndpoint"></a>

```java
public java.lang.String getRepositoryEndpoint();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `domainOwnerInput`<sup>Optional</sup> <a name="domainOwnerInput" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwnerInput"></a>

```java
public java.lang.String getDomainOwnerInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `domainOwner`<sup>Required</sup> <a name="domainOwner" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.domainOwner"></a>

```java
public java.lang.String getDomainOwner();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodeartifactRepositoryEndpointConfig <a name="DataAwsCodeartifactRepositoryEndpointConfig" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_codeartifact_repository_endpoint.DataAwsCodeartifactRepositoryEndpointConfig;

DataAwsCodeartifactRepositoryEndpointConfig.builder()
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
    .format(java.lang.String)
    .repository(java.lang.String)
//  .domainOwner(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domainOwner">domainOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.domainOwner"></a>

```java
public java.lang.String getDomainOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeartifactRepositoryEndpoint.DataAwsCodeartifactRepositoryEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



