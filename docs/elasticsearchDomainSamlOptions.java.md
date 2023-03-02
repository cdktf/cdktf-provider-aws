# `elasticsearchDomainSamlOptions` Submodule <a name="`elasticsearchDomainSamlOptions` Submodule" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticsearchDomainSamlOptions <a name="ElasticsearchDomainSamlOptions" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options aws_elasticsearch_domain_saml_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_domain_saml_options.ElasticsearchDomainSamlOptions;

ElasticsearchDomainSamlOptions.Builder.create(Construct scope, java.lang.String id)
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
//  .samlOptions(ElasticsearchDomainSamlOptionsSamlOptions)
//  .timeouts(ElasticsearchDomainSamlOptionsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#domain_name ElasticsearchDomainSamlOptions#domain_name}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#id ElasticsearchDomainSamlOptions#id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.samlOptions">samlOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a></code> | saml_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#domain_name ElasticsearchDomainSamlOptions#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#id ElasticsearchDomainSamlOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `samlOptions`<sup>Optional</sup> <a name="samlOptions" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.samlOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a>

saml_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#saml_options ElasticsearchDomainSamlOptions#saml_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#timeouts ElasticsearchDomainSamlOptions#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putSamlOptions">putSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetSamlOptions">resetSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSamlOptions` <a name="putSamlOptions" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putSamlOptions"></a>

```java
public void putSamlOptions(ElasticsearchDomainSamlOptionsSamlOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putSamlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putTimeouts"></a>

```java
public void putTimeouts(ElasticsearchDomainSamlOptionsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetId"></a>

```java
public void resetId()
```

##### `resetSamlOptions` <a name="resetSamlOptions" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetSamlOptions"></a>

```java
public void resetSamlOptions()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_domain_saml_options.ElasticsearchDomainSamlOptions;

ElasticsearchDomainSamlOptions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_domain_saml_options.ElasticsearchDomainSamlOptions;

ElasticsearchDomainSamlOptions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_domain_saml_options.ElasticsearchDomainSamlOptions;

ElasticsearchDomainSamlOptions.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.samlOptions">samlOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference">ElasticsearchDomainSamlOptionsSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference">ElasticsearchDomainSamlOptionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.samlOptionsInput">samlOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `samlOptions`<sup>Required</sup> <a name="samlOptions" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.samlOptions"></a>

```java
public ElasticsearchDomainSamlOptionsSamlOptionsOutputReference getSamlOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference">ElasticsearchDomainSamlOptionsSamlOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.timeouts"></a>

```java
public ElasticsearchDomainSamlOptionsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference">ElasticsearchDomainSamlOptionsTimeoutsOutputReference</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `samlOptionsInput`<sup>Optional</sup> <a name="samlOptionsInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.samlOptionsInput"></a>

```java
public ElasticsearchDomainSamlOptionsSamlOptions getSamlOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticsearchDomainSamlOptionsConfig <a name="ElasticsearchDomainSamlOptionsConfig" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_domain_saml_options.ElasticsearchDomainSamlOptionsConfig;

ElasticsearchDomainSamlOptionsConfig.builder()
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
//  .samlOptions(ElasticsearchDomainSamlOptionsSamlOptions)
//  .timeouts(ElasticsearchDomainSamlOptionsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#domain_name ElasticsearchDomainSamlOptions#domain_name}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#id ElasticsearchDomainSamlOptions#id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.samlOptions">samlOptions</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a></code> | saml_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#domain_name ElasticsearchDomainSamlOptions#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#id ElasticsearchDomainSamlOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `samlOptions`<sup>Optional</sup> <a name="samlOptions" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.samlOptions"></a>

```java
public ElasticsearchDomainSamlOptionsSamlOptions getSamlOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a>

saml_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#saml_options ElasticsearchDomainSamlOptions#saml_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.timeouts"></a>

```java
public ElasticsearchDomainSamlOptionsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#timeouts ElasticsearchDomainSamlOptions#timeouts}

---

### ElasticsearchDomainSamlOptionsSamlOptions <a name="ElasticsearchDomainSamlOptionsSamlOptions" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_domain_saml_options.ElasticsearchDomainSamlOptionsSamlOptions;

ElasticsearchDomainSamlOptionsSamlOptions.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .idp(ElasticsearchDomainSamlOptionsSamlOptionsIdp)
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
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#enabled ElasticsearchDomainSamlOptions#enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.idp">idp</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a></code> | idp block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.masterBackendRole">masterBackendRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#master_backend_role ElasticsearchDomainSamlOptions#master_backend_role}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.masterUserName">masterUserName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#master_user_name ElasticsearchDomainSamlOptions#master_user_name}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#roles_key ElasticsearchDomainSamlOptions#roles_key}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#session_timeout_minutes ElasticsearchDomainSamlOptions#session_timeout_minutes}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#subject_key ElasticsearchDomainSamlOptions#subject_key}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#enabled ElasticsearchDomainSamlOptions#enabled}.

---

##### `idp`<sup>Optional</sup> <a name="idp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.idp"></a>

```java
public ElasticsearchDomainSamlOptionsSamlOptionsIdp getIdp();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a>

idp block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#idp ElasticsearchDomainSamlOptions#idp}

---

##### `masterBackendRole`<sup>Optional</sup> <a name="masterBackendRole" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.masterBackendRole"></a>

```java
public java.lang.String getMasterBackendRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#master_backend_role ElasticsearchDomainSamlOptions#master_backend_role}.

---

##### `masterUserName`<sup>Optional</sup> <a name="masterUserName" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.masterUserName"></a>

```java
public java.lang.String getMasterUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#master_user_name ElasticsearchDomainSamlOptions#master_user_name}.

---

##### `rolesKey`<sup>Optional</sup> <a name="rolesKey" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#roles_key ElasticsearchDomainSamlOptions#roles_key}.

---

##### `sessionTimeoutMinutes`<sup>Optional</sup> <a name="sessionTimeoutMinutes" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.sessionTimeoutMinutes"></a>

```java
public java.lang.Number getSessionTimeoutMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#session_timeout_minutes ElasticsearchDomainSamlOptions#session_timeout_minutes}.

---

##### `subjectKey`<sup>Optional</sup> <a name="subjectKey" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#subject_key ElasticsearchDomainSamlOptions#subject_key}.

---

### ElasticsearchDomainSamlOptionsSamlOptionsIdp <a name="ElasticsearchDomainSamlOptionsSamlOptionsIdp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_domain_saml_options.ElasticsearchDomainSamlOptionsSamlOptionsIdp;

ElasticsearchDomainSamlOptionsSamlOptionsIdp.builder()
    .entityId(java.lang.String)
    .metadataContent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp.property.entityId">entityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#entity_id ElasticsearchDomainSamlOptions#entity_id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp.property.metadataContent">metadataContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#metadata_content ElasticsearchDomainSamlOptions#metadata_content}. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#entity_id ElasticsearchDomainSamlOptions#entity_id}.

---

##### `metadataContent`<sup>Required</sup> <a name="metadataContent" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp.property.metadataContent"></a>

```java
public java.lang.String getMetadataContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#metadata_content ElasticsearchDomainSamlOptions#metadata_content}.

---

### ElasticsearchDomainSamlOptionsTimeouts <a name="ElasticsearchDomainSamlOptionsTimeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_domain_saml_options.ElasticsearchDomainSamlOptionsTimeouts;

ElasticsearchDomainSamlOptionsTimeouts.builder()
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#delete ElasticsearchDomainSamlOptions#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#update ElasticsearchDomainSamlOptions#update}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#delete ElasticsearchDomainSamlOptions#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#update ElasticsearchDomainSamlOptions#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference <a name="ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_domain_saml_options.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference;

new ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContentInput">metadataContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContent">metadataContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityIdInput"></a>

```java
public java.lang.String getEntityIdInput();
```

- *Type:* java.lang.String

---

##### `metadataContentInput`<sup>Optional</sup> <a name="metadataContentInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContentInput"></a>

```java
public java.lang.String getMetadataContentInput();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `metadataContent`<sup>Required</sup> <a name="metadataContent" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContent"></a>

```java
public java.lang.String getMetadataContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.internalValue"></a>

```java
public ElasticsearchDomainSamlOptionsSamlOptionsIdp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a>

---


### ElasticsearchDomainSamlOptionsSamlOptionsOutputReference <a name="ElasticsearchDomainSamlOptionsSamlOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_domain_saml_options.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference;

new ElasticsearchDomainSamlOptionsSamlOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.putIdp">putIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetIdp">resetIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterBackendRole">resetMasterBackendRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterUserName">resetMasterUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetRolesKey">resetRolesKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes">resetSessionTimeoutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetSubjectKey">resetSubjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdp` <a name="putIdp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.putIdp"></a>

```java
public void putIdp(ElasticsearchDomainSamlOptionsSamlOptionsIdp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.putIdp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetIdp` <a name="resetIdp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetIdp"></a>

```java
public void resetIdp()
```

##### `resetMasterBackendRole` <a name="resetMasterBackendRole" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterBackendRole"></a>

```java
public void resetMasterBackendRole()
```

##### `resetMasterUserName` <a name="resetMasterUserName" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterUserName"></a>

```java
public void resetMasterUserName()
```

##### `resetRolesKey` <a name="resetRolesKey" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetRolesKey"></a>

```java
public void resetRolesKey()
```

##### `resetSessionTimeoutMinutes` <a name="resetSessionTimeoutMinutes" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes"></a>

```java
public void resetSessionTimeoutMinutes()
```

##### `resetSubjectKey` <a name="resetSubjectKey" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetSubjectKey"></a>

```java
public void resetSubjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.idp">idp</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference">ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.idpInput">idpInput</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRoleInput">masterBackendRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserNameInput">masterUserNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKeyInput">rolesKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput">sessionTimeoutMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKeyInput">subjectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRole">masterBackendRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserName">masterUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKey">rolesKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKey">subjectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idp`<sup>Required</sup> <a name="idp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.idp"></a>

```java
public ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference getIdp();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference">ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idpInput`<sup>Optional</sup> <a name="idpInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.idpInput"></a>

```java
public ElasticsearchDomainSamlOptionsSamlOptionsIdp getIdpInput();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a>

---

##### `masterBackendRoleInput`<sup>Optional</sup> <a name="masterBackendRoleInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRoleInput"></a>

```java
public java.lang.String getMasterBackendRoleInput();
```

- *Type:* java.lang.String

---

##### `masterUserNameInput`<sup>Optional</sup> <a name="masterUserNameInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserNameInput"></a>

```java
public java.lang.String getMasterUserNameInput();
```

- *Type:* java.lang.String

---

##### `rolesKeyInput`<sup>Optional</sup> <a name="rolesKeyInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKeyInput"></a>

```java
public java.lang.String getRolesKeyInput();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutMinutesInput`<sup>Optional</sup> <a name="sessionTimeoutMinutesInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput"></a>

```java
public java.lang.Number getSessionTimeoutMinutesInput();
```

- *Type:* java.lang.Number

---

##### `subjectKeyInput`<sup>Optional</sup> <a name="subjectKeyInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKeyInput"></a>

```java
public java.lang.String getSubjectKeyInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `masterBackendRole`<sup>Required</sup> <a name="masterBackendRole" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRole"></a>

```java
public java.lang.String getMasterBackendRole();
```

- *Type:* java.lang.String

---

##### `masterUserName`<sup>Required</sup> <a name="masterUserName" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserName"></a>

```java
public java.lang.String getMasterUserName();
```

- *Type:* java.lang.String

---

##### `rolesKey`<sup>Required</sup> <a name="rolesKey" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKey"></a>

```java
public java.lang.String getRolesKey();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutMinutes`<sup>Required</sup> <a name="sessionTimeoutMinutes" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes"></a>

```java
public java.lang.Number getSessionTimeoutMinutes();
```

- *Type:* java.lang.Number

---

##### `subjectKey`<sup>Required</sup> <a name="subjectKey" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKey"></a>

```java
public java.lang.String getSubjectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.internalValue"></a>

```java
public ElasticsearchDomainSamlOptionsSamlOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a>

---


### ElasticsearchDomainSamlOptionsTimeoutsOutputReference <a name="ElasticsearchDomainSamlOptionsTimeoutsOutputReference" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.elasticsearch_domain_saml_options.ElasticsearchDomainSamlOptionsTimeoutsOutputReference;

new ElasticsearchDomainSamlOptionsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



