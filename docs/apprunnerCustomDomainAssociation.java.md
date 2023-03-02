# `apprunnerCustomDomainAssociation` Submodule <a name="`apprunnerCustomDomainAssociation` Submodule" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerCustomDomainAssociation <a name="ApprunnerCustomDomainAssociation" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association aws_apprunner_custom_domain_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_custom_domain_association.ApprunnerCustomDomainAssociation;

ApprunnerCustomDomainAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .domainName(java.lang.String)
    .serviceArn(java.lang.String)
//  .enableWwwSubdomain(java.lang.Boolean)
//  .enableWwwSubdomain(IResolvable)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#domain_name ApprunnerCustomDomainAssociation#domain_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#service_arn ApprunnerCustomDomainAssociation#service_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.enableWwwSubdomain">enableWwwSubdomain</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#id ApprunnerCustomDomainAssociation#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#domain_name ApprunnerCustomDomainAssociation#domain_name}.

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.serviceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#service_arn ApprunnerCustomDomainAssociation#service_arn}.

---

##### `enableWwwSubdomain`<sup>Optional</sup> <a name="enableWwwSubdomain" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.enableWwwSubdomain"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#id ApprunnerCustomDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetEnableWwwSubdomain">resetEnableWwwSubdomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEnableWwwSubdomain` <a name="resetEnableWwwSubdomain" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetEnableWwwSubdomain"></a>

```java
public void resetEnableWwwSubdomain()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_custom_domain_association.ApprunnerCustomDomainAssociation;

ApprunnerCustomDomainAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_custom_domain_association.ApprunnerCustomDomainAssociation;

ApprunnerCustomDomainAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_custom_domain_association.ApprunnerCustomDomainAssociation;

ApprunnerCustomDomainAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.certificateValidationRecords">certificateValidationRecords</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList">ApprunnerCustomDomainAssociationCertificateValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dnsTarget">dnsTarget</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomainInput">enableWwwSubdomainInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArnInput">serviceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomain">enableWwwSubdomain</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateValidationRecords`<sup>Required</sup> <a name="certificateValidationRecords" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.certificateValidationRecords"></a>

```java
public ApprunnerCustomDomainAssociationCertificateValidationRecordsList getCertificateValidationRecords();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList">ApprunnerCustomDomainAssociationCertificateValidationRecordsList</a>

---

##### `dnsTarget`<sup>Required</sup> <a name="dnsTarget" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.dnsTarget"></a>

```java
public java.lang.String getDnsTarget();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `enableWwwSubdomainInput`<sup>Optional</sup> <a name="enableWwwSubdomainInput" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomainInput"></a>

```java
public java.lang.Object getEnableWwwSubdomainInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `serviceArnInput`<sup>Optional</sup> <a name="serviceArnInput" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArnInput"></a>

```java
public java.lang.String getServiceArnInput();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `enableWwwSubdomain`<sup>Required</sup> <a name="enableWwwSubdomain" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.enableWwwSubdomain"></a>

```java
public java.lang.Object getEnableWwwSubdomain();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.serviceArn"></a>

```java
public java.lang.String getServiceArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerCustomDomainAssociationCertificateValidationRecords <a name="ApprunnerCustomDomainAssociationCertificateValidationRecords" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_custom_domain_association.ApprunnerCustomDomainAssociationCertificateValidationRecords;

ApprunnerCustomDomainAssociationCertificateValidationRecords.builder()
    .build();
```


### ApprunnerCustomDomainAssociationConfig <a name="ApprunnerCustomDomainAssociationConfig" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_custom_domain_association.ApprunnerCustomDomainAssociationConfig;

ApprunnerCustomDomainAssociationConfig.builder()
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
    .domainName(java.lang.String)
    .serviceArn(java.lang.String)
//  .enableWwwSubdomain(java.lang.Boolean)
//  .enableWwwSubdomain(IResolvable)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#domain_name ApprunnerCustomDomainAssociation#domain_name}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#service_arn ApprunnerCustomDomainAssociation#service_arn}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.enableWwwSubdomain">enableWwwSubdomain</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#id ApprunnerCustomDomainAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#domain_name ApprunnerCustomDomainAssociation#domain_name}.

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.serviceArn"></a>

```java
public java.lang.String getServiceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#service_arn ApprunnerCustomDomainAssociation#service_arn}.

---

##### `enableWwwSubdomain`<sup>Optional</sup> <a name="enableWwwSubdomain" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.enableWwwSubdomain"></a>

```java
public java.lang.Object getEnableWwwSubdomain();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association#id ApprunnerCustomDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerCustomDomainAssociationCertificateValidationRecordsList <a name="ApprunnerCustomDomainAssociationCertificateValidationRecordsList" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_custom_domain_association.ApprunnerCustomDomainAssociationCertificateValidationRecordsList;

new ApprunnerCustomDomainAssociationCertificateValidationRecordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.get"></a>

```java
public ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference <a name="ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apprunner_custom_domain_association.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference;

new ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords">ApprunnerCustomDomainAssociationCertificateValidationRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference.property.internalValue"></a>

```java
public ApprunnerCustomDomainAssociationCertificateValidationRecords getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apprunnerCustomDomainAssociation.ApprunnerCustomDomainAssociationCertificateValidationRecords">ApprunnerCustomDomainAssociationCertificateValidationRecords</a>

---



