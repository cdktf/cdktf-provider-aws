# `opensearchDomainSamlOptions` Submodule <a name="`opensearchDomainSamlOptions` Submodule" id="@cdktf/provider-aws.opensearchDomainSamlOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchDomainSamlOptions <a name="OpensearchDomainSamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options aws_opensearch_domain_saml_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain_saml_options.OpensearchDomainSamlOptions;

OpensearchDomainSamlOptions.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .samlOptions(OpensearchDomainSamlOptionsSamlOptions)
//  .timeouts(OpensearchDomainSamlOptionsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#domain_name OpensearchDomainSamlOptions#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#id OpensearchDomainSamlOptions#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.samlOptions">samlOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a></code> | saml_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts">OpensearchDomainSamlOptionsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#domain_name OpensearchDomainSamlOptions#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#id OpensearchDomainSamlOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `samlOptions`<sup>Optional</sup> <a name="samlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.samlOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a>

saml_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#saml_options OpensearchDomainSamlOptions#saml_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts">OpensearchDomainSamlOptionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#timeouts OpensearchDomainSamlOptions#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putSamlOptions">putSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetSamlOptions">resetSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSamlOptions` <a name="putSamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putSamlOptions"></a>

```java
public void putSamlOptions(OpensearchDomainSamlOptionsSamlOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putSamlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putTimeouts"></a>

```java
public void putTimeouts(OpensearchDomainSamlOptionsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts">OpensearchDomainSamlOptionsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetId"></a>

```java
public void resetId()
```

##### `resetSamlOptions` <a name="resetSamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetSamlOptions"></a>

```java
public void resetSamlOptions()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain_saml_options.OpensearchDomainSamlOptions;

OpensearchDomainSamlOptions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain_saml_options.OpensearchDomainSamlOptions;

OpensearchDomainSamlOptions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain_saml_options.OpensearchDomainSamlOptions;

OpensearchDomainSamlOptions.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.samlOptions">samlOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference">OpensearchDomainSamlOptionsSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference">OpensearchDomainSamlOptionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.samlOptionsInput">samlOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts">OpensearchDomainSamlOptionsTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `samlOptions`<sup>Required</sup> <a name="samlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.samlOptions"></a>

```java
public OpensearchDomainSamlOptionsSamlOptionsOutputReference getSamlOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference">OpensearchDomainSamlOptionsSamlOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.timeouts"></a>

```java
public OpensearchDomainSamlOptionsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference">OpensearchDomainSamlOptionsTimeoutsOutputReference</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `samlOptionsInput`<sup>Optional</sup> <a name="samlOptionsInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.samlOptionsInput"></a>

```java
public OpensearchDomainSamlOptionsSamlOptions getSamlOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts">OpensearchDomainSamlOptionsTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchDomainSamlOptionsConfig <a name="OpensearchDomainSamlOptionsConfig" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain_saml_options.OpensearchDomainSamlOptionsConfig;

OpensearchDomainSamlOptionsConfig.builder()
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
//  .id(java.lang.String)
//  .samlOptions(OpensearchDomainSamlOptionsSamlOptions)
//  .timeouts(OpensearchDomainSamlOptionsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#domain_name OpensearchDomainSamlOptions#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#id OpensearchDomainSamlOptions#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.samlOptions">samlOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a></code> | saml_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts">OpensearchDomainSamlOptionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#domain_name OpensearchDomainSamlOptions#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#id OpensearchDomainSamlOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `samlOptions`<sup>Optional</sup> <a name="samlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.samlOptions"></a>

```java
public OpensearchDomainSamlOptionsSamlOptions getSamlOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a>

saml_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#saml_options OpensearchDomainSamlOptions#saml_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsConfig.property.timeouts"></a>

```java
public OpensearchDomainSamlOptionsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts">OpensearchDomainSamlOptionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#timeouts OpensearchDomainSamlOptions#timeouts}

---

### OpensearchDomainSamlOptionsSamlOptions <a name="OpensearchDomainSamlOptionsSamlOptions" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain_saml_options.OpensearchDomainSamlOptionsSamlOptions;

OpensearchDomainSamlOptionsSamlOptions.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .idp(OpensearchDomainSamlOptionsSamlOptionsIdp)
//  .masterBackendRole(java.lang.String)
//  .masterUserName(java.lang.String)
//  .rolesKey(java.lang.String)
//  .sessionTimeoutMinutes(java.lang.Number)
//  .subjectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#enabled OpensearchDomainSamlOptions#enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.idp">idp</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a></code> | idp block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.masterBackendRole">masterBackendRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#master_backend_role OpensearchDomainSamlOptions#master_backend_role}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.masterUserName">masterUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#master_user_name OpensearchDomainSamlOptions#master_user_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#roles_key OpensearchDomainSamlOptions#roles_key}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#session_timeout_minutes OpensearchDomainSamlOptions#session_timeout_minutes}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#subject_key OpensearchDomainSamlOptions#subject_key}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#enabled OpensearchDomainSamlOptions#enabled}.

---

##### `idp`<sup>Optional</sup> <a name="idp" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.idp"></a>

```java
public OpensearchDomainSamlOptionsSamlOptionsIdp getIdp();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a>

idp block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#idp OpensearchDomainSamlOptions#idp}

---

##### `masterBackendRole`<sup>Optional</sup> <a name="masterBackendRole" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.masterBackendRole"></a>

```java
public java.lang.String getMasterBackendRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#master_backend_role OpensearchDomainSamlOptions#master_backend_role}.

---

##### `masterUserName`<sup>Optional</sup> <a name="masterUserName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.masterUserName"></a>

```java
public java.lang.String getMasterUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#master_user_name OpensearchDomainSamlOptions#master_user_name}.

---

##### `rolesKey`<sup>Optional</sup> <a name="rolesKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#roles_key OpensearchDomainSamlOptions#roles_key}.

---

##### `sessionTimeoutMinutes`<sup>Optional</sup> <a name="sessionTimeoutMinutes" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.sessionTimeoutMinutes"></a>

```java
public java.lang.Number getSessionTimeoutMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#session_timeout_minutes OpensearchDomainSamlOptions#session_timeout_minutes}.

---

##### `subjectKey`<sup>Optional</sup> <a name="subjectKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#subject_key OpensearchDomainSamlOptions#subject_key}.

---

### OpensearchDomainSamlOptionsSamlOptionsIdp <a name="OpensearchDomainSamlOptionsSamlOptionsIdp" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain_saml_options.OpensearchDomainSamlOptionsSamlOptionsIdp;

OpensearchDomainSamlOptionsSamlOptionsIdp.builder()
    .entityId(java.lang.String)
    .metadataContent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp.property.entityId">entityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#entity_id OpensearchDomainSamlOptions#entity_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp.property.metadataContent">metadataContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#metadata_content OpensearchDomainSamlOptions#metadata_content}. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#entity_id OpensearchDomainSamlOptions#entity_id}.

---

##### `metadataContent`<sup>Required</sup> <a name="metadataContent" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp.property.metadataContent"></a>

```java
public java.lang.String getMetadataContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#metadata_content OpensearchDomainSamlOptions#metadata_content}.

---

### OpensearchDomainSamlOptionsTimeouts <a name="OpensearchDomainSamlOptionsTimeouts" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain_saml_options.OpensearchDomainSamlOptionsTimeouts;

OpensearchDomainSamlOptionsTimeouts.builder()
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#delete OpensearchDomainSamlOptions#delete}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#update OpensearchDomainSamlOptions#update}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#delete OpensearchDomainSamlOptions#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain_saml_options#update OpensearchDomainSamlOptions#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference <a name="OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain_saml_options.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference;

new OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContentInput">metadataContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContent">metadataContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityIdInput"></a>

```java
public java.lang.String getEntityIdInput();
```

- *Type:* java.lang.String

---

##### `metadataContentInput`<sup>Optional</sup> <a name="metadataContentInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContentInput"></a>

```java
public java.lang.String getMetadataContentInput();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `metadataContent`<sup>Required</sup> <a name="metadataContent" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContent"></a>

```java
public java.lang.String getMetadataContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.internalValue"></a>

```java
public OpensearchDomainSamlOptionsSamlOptionsIdp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a>

---


### OpensearchDomainSamlOptionsSamlOptionsOutputReference <a name="OpensearchDomainSamlOptionsSamlOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain_saml_options.OpensearchDomainSamlOptionsSamlOptionsOutputReference;

new OpensearchDomainSamlOptionsSamlOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.putIdp">putIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetIdp">resetIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterBackendRole">resetMasterBackendRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterUserName">resetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetRolesKey">resetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes">resetSessionTimeoutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetSubjectKey">resetSubjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdp` <a name="putIdp" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.putIdp"></a>

```java
public void putIdp(OpensearchDomainSamlOptionsSamlOptionsIdp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.putIdp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetIdp` <a name="resetIdp" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetIdp"></a>

```java
public void resetIdp()
```

##### `resetMasterBackendRole` <a name="resetMasterBackendRole" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterBackendRole"></a>

```java
public void resetMasterBackendRole()
```

##### `resetMasterUserName` <a name="resetMasterUserName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterUserName"></a>

```java
public void resetMasterUserName()
```

##### `resetRolesKey` <a name="resetRolesKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetRolesKey"></a>

```java
public void resetRolesKey()
```

##### `resetSessionTimeoutMinutes` <a name="resetSessionTimeoutMinutes" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes"></a>

```java
public void resetSessionTimeoutMinutes()
```

##### `resetSubjectKey` <a name="resetSubjectKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.resetSubjectKey"></a>

```java
public void resetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.idp">idp</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference">OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.idpInput">idpInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRoleInput">masterBackendRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserNameInput">masterUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKeyInput">rolesKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput">sessionTimeoutMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKeyInput">subjectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRole">masterBackendRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserName">masterUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idp`<sup>Required</sup> <a name="idp" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.idp"></a>

```java
public OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference getIdp();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference">OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idpInput`<sup>Optional</sup> <a name="idpInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.idpInput"></a>

```java
public OpensearchDomainSamlOptionsSamlOptionsIdp getIdpInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsIdp">OpensearchDomainSamlOptionsSamlOptionsIdp</a>

---

##### `masterBackendRoleInput`<sup>Optional</sup> <a name="masterBackendRoleInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRoleInput"></a>

```java
public java.lang.String getMasterBackendRoleInput();
```

- *Type:* java.lang.String

---

##### `masterUserNameInput`<sup>Optional</sup> <a name="masterUserNameInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserNameInput"></a>

```java
public java.lang.String getMasterUserNameInput();
```

- *Type:* java.lang.String

---

##### `rolesKeyInput`<sup>Optional</sup> <a name="rolesKeyInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKeyInput"></a>

```java
public java.lang.String getRolesKeyInput();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutMinutesInput`<sup>Optional</sup> <a name="sessionTimeoutMinutesInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput"></a>

```java
public java.lang.Number getSessionTimeoutMinutesInput();
```

- *Type:* java.lang.Number

---

##### `subjectKeyInput`<sup>Optional</sup> <a name="subjectKeyInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKeyInput"></a>

```java
public java.lang.String getSubjectKeyInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `masterBackendRole`<sup>Required</sup> <a name="masterBackendRole" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRole"></a>

```java
public java.lang.String getMasterBackendRole();
```

- *Type:* java.lang.String

---

##### `masterUserName`<sup>Required</sup> <a name="masterUserName" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserName"></a>

```java
public java.lang.String getMasterUserName();
```

- *Type:* java.lang.String

---

##### `rolesKey`<sup>Required</sup> <a name="rolesKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutMinutes`<sup>Required</sup> <a name="sessionTimeoutMinutes" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes"></a>

```java
public java.lang.Number getSessionTimeoutMinutes();
```

- *Type:* java.lang.Number

---

##### `subjectKey`<sup>Required</sup> <a name="subjectKey" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptionsOutputReference.property.internalValue"></a>

```java
public OpensearchDomainSamlOptionsSamlOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsSamlOptions">OpensearchDomainSamlOptionsSamlOptions</a>

---


### OpensearchDomainSamlOptionsTimeoutsOutputReference <a name="OpensearchDomainSamlOptionsTimeoutsOutputReference" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_domain_saml_options.OpensearchDomainSamlOptionsTimeoutsOutputReference;

new OpensearchDomainSamlOptionsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts">OpensearchDomainSamlOptionsTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomainSamlOptions.OpensearchDomainSamlOptionsTimeouts">OpensearchDomainSamlOptionsTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



