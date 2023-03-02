# `codeartifactRepositoryPermissionsPolicy` Submodule <a name="`codeartifactRepositoryPermissionsPolicy` Submodule" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeartifactRepositoryPermissionsPolicy <a name="CodeartifactRepositoryPermissionsPolicy" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy aws_codeartifact_repository_permissions_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codeartifact_repository_permissions_policy.CodeartifactRepositoryPermissionsPolicy;

CodeartifactRepositoryPermissionsPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .policyDocument(java.lang.String)
    .repository(java.lang.String)
//  .domainOwner(java.lang.String)
//  .id(java.lang.String)
//  .policyRevision(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain CodeartifactRepositoryPermissionsPolicy#domain}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_document CodeartifactRepositoryPermissionsPolicy#policy_document}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#repository CodeartifactRepositoryPermissionsPolicy#repository}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.domainOwner">domainOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain_owner CodeartifactRepositoryPermissionsPolicy#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#id CodeartifactRepositoryPermissionsPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.policyRevision">policyRevision</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_revision CodeartifactRepositoryPermissionsPolicy#policy_revision}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain CodeartifactRepositoryPermissionsPolicy#domain}.

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.policyDocument"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_document CodeartifactRepositoryPermissionsPolicy#policy_document}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#repository CodeartifactRepositoryPermissionsPolicy#repository}.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.domainOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain_owner CodeartifactRepositoryPermissionsPolicy#domain_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#id CodeartifactRepositoryPermissionsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyRevision`<sup>Optional</sup> <a name="policyRevision" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.Initializer.parameter.policyRevision"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_revision CodeartifactRepositoryPermissionsPolicy#policy_revision}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetDomainOwner">resetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetPolicyRevision">resetPolicyRevision</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDomainOwner` <a name="resetDomainOwner" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetDomainOwner"></a>

```java
public void resetDomainOwner()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetPolicyRevision` <a name="resetPolicyRevision" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.resetPolicyRevision"></a>

```java
public void resetPolicyRevision()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.codeartifact_repository_permissions_policy.CodeartifactRepositoryPermissionsPolicy;

CodeartifactRepositoryPermissionsPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.codeartifact_repository_permissions_policy.CodeartifactRepositoryPermissionsPolicy;

CodeartifactRepositoryPermissionsPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.codeartifact_repository_permissions_policy.CodeartifactRepositoryPermissionsPolicy;

CodeartifactRepositoryPermissionsPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwnerInput">domainOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocumentInput">policyDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevisionInput">policyRevisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwner">domainOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevision">policyRevision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `domainOwnerInput`<sup>Optional</sup> <a name="domainOwnerInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwnerInput"></a>

```java
public java.lang.String getDomainOwnerInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocumentInput"></a>

```java
public java.lang.String getPolicyDocumentInput();
```

- *Type:* java.lang.String

---

##### `policyRevisionInput`<sup>Optional</sup> <a name="policyRevisionInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevisionInput"></a>

```java
public java.lang.String getPolicyRevisionInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `domainOwner`<sup>Required</sup> <a name="domainOwner" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.domainOwner"></a>

```java
public java.lang.String getDomainOwner();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

---

##### `policyRevision`<sup>Required</sup> <a name="policyRevision" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.policyRevision"></a>

```java
public java.lang.String getPolicyRevision();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodeartifactRepositoryPermissionsPolicyConfig <a name="CodeartifactRepositoryPermissionsPolicyConfig" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codeartifact_repository_permissions_policy.CodeartifactRepositoryPermissionsPolicyConfig;

CodeartifactRepositoryPermissionsPolicyConfig.builder()
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
    .policyDocument(java.lang.String)
    .repository(java.lang.String)
//  .domainOwner(java.lang.String)
//  .id(java.lang.String)
//  .policyRevision(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain CodeartifactRepositoryPermissionsPolicy#domain}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_document CodeartifactRepositoryPermissionsPolicy#policy_document}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#repository CodeartifactRepositoryPermissionsPolicy#repository}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domainOwner">domainOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain_owner CodeartifactRepositoryPermissionsPolicy#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#id CodeartifactRepositoryPermissionsPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyRevision">policyRevision</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_revision CodeartifactRepositoryPermissionsPolicy#policy_revision}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain CodeartifactRepositoryPermissionsPolicy#domain}.

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_document CodeartifactRepositoryPermissionsPolicy#policy_document}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#repository CodeartifactRepositoryPermissionsPolicy#repository}.

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.domainOwner"></a>

```java
public java.lang.String getDomainOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#domain_owner CodeartifactRepositoryPermissionsPolicy#domain_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#id CodeartifactRepositoryPermissionsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyRevision`<sup>Optional</sup> <a name="policyRevision" id="@cdktf/provider-aws.codeartifactRepositoryPermissionsPolicy.CodeartifactRepositoryPermissionsPolicyConfig.property.policyRevision"></a>

```java
public java.lang.String getPolicyRevision();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository_permissions_policy#policy_revision CodeartifactRepositoryPermissionsPolicy#policy_revision}.

---



