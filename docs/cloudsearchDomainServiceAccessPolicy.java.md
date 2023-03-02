# `cloudsearchDomainServiceAccessPolicy` Submodule <a name="`cloudsearchDomainServiceAccessPolicy` Submodule" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudsearchDomainServiceAccessPolicy <a name="CloudsearchDomainServiceAccessPolicy" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy aws_cloudsearch_domain_service_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudsearch_domain_service_access_policy.CloudsearchDomainServiceAccessPolicy;

CloudsearchDomainServiceAccessPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .accessPolicy(java.lang.String)
    .domainName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CloudsearchDomainServiceAccessPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.accessPolicy">accessPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#access_policy CloudsearchDomainServiceAccessPolicy#access_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#domain_name CloudsearchDomainServiceAccessPolicy#domain_name}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#id CloudsearchDomainServiceAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessPolicy`<sup>Required</sup> <a name="accessPolicy" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.accessPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#access_policy CloudsearchDomainServiceAccessPolicy#access_policy}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#domain_name CloudsearchDomainServiceAccessPolicy#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#id CloudsearchDomainServiceAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#timeouts CloudsearchDomainServiceAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.putTimeouts"></a>

```java
public void putTimeouts(CloudsearchDomainServiceAccessPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudsearch_domain_service_access_policy.CloudsearchDomainServiceAccessPolicy;

CloudsearchDomainServiceAccessPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudsearch_domain_service_access_policy.CloudsearchDomainServiceAccessPolicy;

CloudsearchDomainServiceAccessPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudsearch_domain_service_access_policy.CloudsearchDomainServiceAccessPolicy;

CloudsearchDomainServiceAccessPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference">CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.accessPolicyInput">accessPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.accessPolicy">accessPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.timeouts"></a>

```java
public CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference">CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference</a>

---

##### `accessPolicyInput`<sup>Optional</sup> <a name="accessPolicyInput" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.accessPolicyInput"></a>

```java
public java.lang.String getAccessPolicyInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `accessPolicy`<sup>Required</sup> <a name="accessPolicy" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.accessPolicy"></a>

```java
public java.lang.String getAccessPolicy();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudsearchDomainServiceAccessPolicyConfig <a name="CloudsearchDomainServiceAccessPolicyConfig" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudsearch_domain_service_access_policy.CloudsearchDomainServiceAccessPolicyConfig;

CloudsearchDomainServiceAccessPolicyConfig.builder()
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
    .accessPolicy(java.lang.String)
    .domainName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(CloudsearchDomainServiceAccessPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.accessPolicy">accessPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#access_policy CloudsearchDomainServiceAccessPolicy#access_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#domain_name CloudsearchDomainServiceAccessPolicy#domain_name}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#id CloudsearchDomainServiceAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessPolicy`<sup>Required</sup> <a name="accessPolicy" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.accessPolicy"></a>

```java
public java.lang.String getAccessPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#access_policy CloudsearchDomainServiceAccessPolicy#access_policy}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#domain_name CloudsearchDomainServiceAccessPolicy#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#id CloudsearchDomainServiceAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyConfig.property.timeouts"></a>

```java
public CloudsearchDomainServiceAccessPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#timeouts CloudsearchDomainServiceAccessPolicy#timeouts}

---

### CloudsearchDomainServiceAccessPolicyTimeouts <a name="CloudsearchDomainServiceAccessPolicyTimeouts" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudsearch_domain_service_access_policy.CloudsearchDomainServiceAccessPolicyTimeouts;

CloudsearchDomainServiceAccessPolicyTimeouts.builder()
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#delete CloudsearchDomainServiceAccessPolicy#delete}. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#update CloudsearchDomainServiceAccessPolicy#update}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#delete CloudsearchDomainServiceAccessPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain_service_access_policy#update CloudsearchDomainServiceAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference <a name="CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudsearch_domain_service_access_policy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference;

new CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudsearchDomainServiceAccessPolicy.CloudsearchDomainServiceAccessPolicyTimeouts">CloudsearchDomainServiceAccessPolicyTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



