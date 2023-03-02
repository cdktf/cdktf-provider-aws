# `organizationsOrganization` Submodule <a name="`organizationsOrganization` Submodule" id="@cdktf/provider-aws.organizationsOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsOrganization <a name="OrganizationsOrganization" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization aws_organizations_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganization;

OrganizationsOrganization.Builder.create(Construct scope, java.lang.String id)
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
//  .awsServiceAccessPrincipals(java.util.List<java.lang.String>)
//  .enabledPolicyTypes(java.util.List<java.lang.String>)
//  .featureSet(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.awsServiceAccessPrincipals">awsServiceAccessPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#aws_service_access_principals OrganizationsOrganization#aws_service_access_principals}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.enabledPolicyTypes">enabledPolicyTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#enabled_policy_types OrganizationsOrganization#enabled_policy_types}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.featureSet">featureSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#feature_set OrganizationsOrganization#feature_set}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#id OrganizationsOrganization#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsServiceAccessPrincipals`<sup>Optional</sup> <a name="awsServiceAccessPrincipals" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.awsServiceAccessPrincipals"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#aws_service_access_principals OrganizationsOrganization#aws_service_access_principals}.

---

##### `enabledPolicyTypes`<sup>Optional</sup> <a name="enabledPolicyTypes" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.enabledPolicyTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#enabled_policy_types OrganizationsOrganization#enabled_policy_types}.

---

##### `featureSet`<sup>Optional</sup> <a name="featureSet" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.featureSet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#feature_set OrganizationsOrganization#feature_set}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#id OrganizationsOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetAwsServiceAccessPrincipals">resetAwsServiceAccessPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetEnabledPolicyTypes">resetEnabledPolicyTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetFeatureSet">resetFeatureSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAwsServiceAccessPrincipals` <a name="resetAwsServiceAccessPrincipals" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetAwsServiceAccessPrincipals"></a>

```java
public void resetAwsServiceAccessPrincipals()
```

##### `resetEnabledPolicyTypes` <a name="resetEnabledPolicyTypes" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetEnabledPolicyTypes"></a>

```java
public void resetEnabledPolicyTypes()
```

##### `resetFeatureSet` <a name="resetFeatureSet" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetFeatureSet"></a>

```java
public void resetFeatureSet()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganization;

OrganizationsOrganization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganization;

OrganizationsOrganization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganization;

OrganizationsOrganization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.accounts">accounts</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList">OrganizationsOrganizationAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.masterAccountArn">masterAccountArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.masterAccountEmail">masterAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.masterAccountId">masterAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.nonMasterAccounts">nonMasterAccounts</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList">OrganizationsOrganizationNonMasterAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.roots">roots</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList">OrganizationsOrganizationRootsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.awsServiceAccessPrincipalsInput">awsServiceAccessPrincipalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.enabledPolicyTypesInput">enabledPolicyTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.featureSetInput">featureSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.awsServiceAccessPrincipals">awsServiceAccessPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.enabledPolicyTypes">enabledPolicyTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.featureSet">featureSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.accounts"></a>

```java
public OrganizationsOrganizationAccountsList getAccounts();
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList">OrganizationsOrganizationAccountsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `masterAccountArn`<sup>Required</sup> <a name="masterAccountArn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.masterAccountArn"></a>

```java
public java.lang.String getMasterAccountArn();
```

- *Type:* java.lang.String

---

##### `masterAccountEmail`<sup>Required</sup> <a name="masterAccountEmail" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.masterAccountEmail"></a>

```java
public java.lang.String getMasterAccountEmail();
```

- *Type:* java.lang.String

---

##### `masterAccountId`<sup>Required</sup> <a name="masterAccountId" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.masterAccountId"></a>

```java
public java.lang.String getMasterAccountId();
```

- *Type:* java.lang.String

---

##### `nonMasterAccounts`<sup>Required</sup> <a name="nonMasterAccounts" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.nonMasterAccounts"></a>

```java
public OrganizationsOrganizationNonMasterAccountsList getNonMasterAccounts();
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList">OrganizationsOrganizationNonMasterAccountsList</a>

---

##### `roots`<sup>Required</sup> <a name="roots" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.roots"></a>

```java
public OrganizationsOrganizationRootsList getRoots();
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList">OrganizationsOrganizationRootsList</a>

---

##### `awsServiceAccessPrincipalsInput`<sup>Optional</sup> <a name="awsServiceAccessPrincipalsInput" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.awsServiceAccessPrincipalsInput"></a>

```java
public java.util.List<java.lang.String> getAwsServiceAccessPrincipalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledPolicyTypesInput`<sup>Optional</sup> <a name="enabledPolicyTypesInput" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.enabledPolicyTypesInput"></a>

```java
public java.util.List<java.lang.String> getEnabledPolicyTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `featureSetInput`<sup>Optional</sup> <a name="featureSetInput" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.featureSetInput"></a>

```java
public java.lang.String getFeatureSetInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `awsServiceAccessPrincipals`<sup>Required</sup> <a name="awsServiceAccessPrincipals" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.awsServiceAccessPrincipals"></a>

```java
public java.util.List<java.lang.String> getAwsServiceAccessPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledPolicyTypes`<sup>Required</sup> <a name="enabledPolicyTypes" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.enabledPolicyTypes"></a>

```java
public java.util.List<java.lang.String> getEnabledPolicyTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `featureSet`<sup>Required</sup> <a name="featureSet" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.featureSet"></a>

```java
public java.lang.String getFeatureSet();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsOrganizationAccounts <a name="OrganizationsOrganizationAccounts" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganizationAccounts;

OrganizationsOrganizationAccounts.builder()
    .build();
```


### OrganizationsOrganizationConfig <a name="OrganizationsOrganizationConfig" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganizationConfig;

OrganizationsOrganizationConfig.builder()
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
//  .awsServiceAccessPrincipals(java.util.List<java.lang.String>)
//  .enabledPolicyTypes(java.util.List<java.lang.String>)
//  .featureSet(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.awsServiceAccessPrincipals">awsServiceAccessPrincipals</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#aws_service_access_principals OrganizationsOrganization#aws_service_access_principals}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.enabledPolicyTypes">enabledPolicyTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#enabled_policy_types OrganizationsOrganization#enabled_policy_types}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.featureSet">featureSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#feature_set OrganizationsOrganization#feature_set}. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#id OrganizationsOrganization#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsServiceAccessPrincipals`<sup>Optional</sup> <a name="awsServiceAccessPrincipals" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.awsServiceAccessPrincipals"></a>

```java
public java.util.List<java.lang.String> getAwsServiceAccessPrincipals();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#aws_service_access_principals OrganizationsOrganization#aws_service_access_principals}.

---

##### `enabledPolicyTypes`<sup>Optional</sup> <a name="enabledPolicyTypes" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.enabledPolicyTypes"></a>

```java
public java.util.List<java.lang.String> getEnabledPolicyTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#enabled_policy_types OrganizationsOrganization#enabled_policy_types}.

---

##### `featureSet`<sup>Optional</sup> <a name="featureSet" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.featureSet"></a>

```java
public java.lang.String getFeatureSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#feature_set OrganizationsOrganization#feature_set}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organization#id OrganizationsOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OrganizationsOrganizationNonMasterAccounts <a name="OrganizationsOrganizationNonMasterAccounts" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganizationNonMasterAccounts;

OrganizationsOrganizationNonMasterAccounts.builder()
    .build();
```


### OrganizationsOrganizationRoots <a name="OrganizationsOrganizationRoots" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRoots"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRoots.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganizationRoots;

OrganizationsOrganizationRoots.builder()
    .build();
```


### OrganizationsOrganizationRootsPolicyTypes <a name="OrganizationsOrganizationRootsPolicyTypes" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganizationRootsPolicyTypes;

OrganizationsOrganizationRootsPolicyTypes.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### OrganizationsOrganizationAccountsList <a name="OrganizationsOrganizationAccountsList" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganizationAccountsList;

new OrganizationsOrganizationAccountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.get"></a>

```java
public OrganizationsOrganizationAccountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OrganizationsOrganizationAccountsOutputReference <a name="OrganizationsOrganizationAccountsOutputReference" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganizationAccountsOutputReference;

new OrganizationsOrganizationAccountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccounts">OrganizationsOrganizationAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccountsOutputReference.property.internalValue"></a>

```java
public OrganizationsOrganizationAccounts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationAccounts">OrganizationsOrganizationAccounts</a>

---


### OrganizationsOrganizationNonMasterAccountsList <a name="OrganizationsOrganizationNonMasterAccountsList" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganizationNonMasterAccountsList;

new OrganizationsOrganizationNonMasterAccountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.get"></a>

```java
public OrganizationsOrganizationNonMasterAccountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OrganizationsOrganizationNonMasterAccountsOutputReference <a name="OrganizationsOrganizationNonMasterAccountsOutputReference" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganizationNonMasterAccountsOutputReference;

new OrganizationsOrganizationNonMasterAccountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccounts">OrganizationsOrganizationNonMasterAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccountsOutputReference.property.internalValue"></a>

```java
public OrganizationsOrganizationNonMasterAccounts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationNonMasterAccounts">OrganizationsOrganizationNonMasterAccounts</a>

---


### OrganizationsOrganizationRootsList <a name="OrganizationsOrganizationRootsList" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganizationRootsList;

new OrganizationsOrganizationRootsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.get"></a>

```java
public OrganizationsOrganizationRootsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OrganizationsOrganizationRootsOutputReference <a name="OrganizationsOrganizationRootsOutputReference" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganizationRootsOutputReference;

new OrganizationsOrganizationRootsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.policyTypes">policyTypes</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList">OrganizationsOrganizationRootsPolicyTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRoots">OrganizationsOrganizationRoots</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyTypes`<sup>Required</sup> <a name="policyTypes" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.policyTypes"></a>

```java
public OrganizationsOrganizationRootsPolicyTypesList getPolicyTypes();
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList">OrganizationsOrganizationRootsPolicyTypesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsOutputReference.property.internalValue"></a>

```java
public OrganizationsOrganizationRoots getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRoots">OrganizationsOrganizationRoots</a>

---


### OrganizationsOrganizationRootsPolicyTypesList <a name="OrganizationsOrganizationRootsPolicyTypesList" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganizationRootsPolicyTypesList;

new OrganizationsOrganizationRootsPolicyTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.get"></a>

```java
public OrganizationsOrganizationRootsPolicyTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OrganizationsOrganizationRootsPolicyTypesOutputReference <a name="OrganizationsOrganizationRootsPolicyTypesOutputReference" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.organizations_organization.OrganizationsOrganizationRootsPolicyTypesOutputReference;

new OrganizationsOrganizationRootsPolicyTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypes">OrganizationsOrganizationRootsPolicyTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypesOutputReference.property.internalValue"></a>

```java
public OrganizationsOrganizationRootsPolicyTypes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.organizationsOrganization.OrganizationsOrganizationRootsPolicyTypes">OrganizationsOrganizationRootsPolicyTypes</a>

---



