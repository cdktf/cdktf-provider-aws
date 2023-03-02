# `apigatewayv2DomainName` Submodule <a name="`apigatewayv2DomainName` Submodule" id="@cdktf/provider-aws.apigatewayv2DomainName"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2DomainName <a name="Apigatewayv2DomainName" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name aws_apigatewayv2_domain_name}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_domain_name.Apigatewayv2DomainName;

Apigatewayv2DomainName.Builder.create(Construct scope, java.lang.String id)
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
    .domainNameConfiguration(Apigatewayv2DomainNameDomainNameConfiguration)
//  .id(java.lang.String)
//  .mutualTlsAuthentication(Apigatewayv2DomainNameMutualTlsAuthentication)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Apigatewayv2DomainNameTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#domain_name Apigatewayv2DomainName#domain_name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.domainNameConfiguration">domainNameConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a></code> | domain_name_configuration block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#id Apigatewayv2DomainName#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.mutualTlsAuthentication">mutualTlsAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | mutual_tls_authentication block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags Apigatewayv2DomainName#tags}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags_all Apigatewayv2DomainName#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#domain_name Apigatewayv2DomainName#domain_name}.

---

##### `domainNameConfiguration`<sup>Required</sup> <a name="domainNameConfiguration" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.domainNameConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a>

domain_name_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#domain_name_configuration Apigatewayv2DomainName#domain_name_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#id Apigatewayv2DomainName#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mutualTlsAuthentication`<sup>Optional</sup> <a name="mutualTlsAuthentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.mutualTlsAuthentication"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

mutual_tls_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#mutual_tls_authentication Apigatewayv2DomainName#mutual_tls_authentication}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags Apigatewayv2DomainName#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags_all Apigatewayv2DomainName#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#timeouts Apigatewayv2DomainName#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfiguration">putDomainNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication">putMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetMutualTlsAuthentication">resetMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDomainNameConfiguration` <a name="putDomainNameConfiguration" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfiguration"></a>

```java
public void putDomainNameConfiguration(Apigatewayv2DomainNameDomainNameConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a>

---

##### `putMutualTlsAuthentication` <a name="putMutualTlsAuthentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication"></a>

```java
public void putMutualTlsAuthentication(Apigatewayv2DomainNameMutualTlsAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putTimeouts"></a>

```java
public void putTimeouts(Apigatewayv2DomainNameTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetId"></a>

```java
public void resetId()
```

##### `resetMutualTlsAuthentication` <a name="resetMutualTlsAuthentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetMutualTlsAuthentication"></a>

```java
public void resetMutualTlsAuthentication()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_domain_name.Apigatewayv2DomainName;

Apigatewayv2DomainName.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_domain_name.Apigatewayv2DomainName;

Apigatewayv2DomainName.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_domain_name.Apigatewayv2DomainName;

Apigatewayv2DomainName.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.apiMappingSelectionExpression">apiMappingSelectionExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfiguration">domainNameConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference">Apigatewayv2DomainNameDomainNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthentication">mutualTlsAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference">Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference">Apigatewayv2DomainNameTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfigurationInput">domainNameConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthenticationInput">mutualTlsAuthenticationInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiMappingSelectionExpression`<sup>Required</sup> <a name="apiMappingSelectionExpression" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.apiMappingSelectionExpression"></a>

```java
public java.lang.String getApiMappingSelectionExpression();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `domainNameConfiguration`<sup>Required</sup> <a name="domainNameConfiguration" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfiguration"></a>

```java
public Apigatewayv2DomainNameDomainNameConfigurationOutputReference getDomainNameConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference">Apigatewayv2DomainNameDomainNameConfigurationOutputReference</a>

---

##### `mutualTlsAuthentication`<sup>Required</sup> <a name="mutualTlsAuthentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthentication"></a>

```java
public Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference getMutualTlsAuthentication();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference">Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.timeouts"></a>

```java
public Apigatewayv2DomainNameTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference">Apigatewayv2DomainNameTimeoutsOutputReference</a>

---

##### `domainNameConfigurationInput`<sup>Optional</sup> <a name="domainNameConfigurationInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfigurationInput"></a>

```java
public Apigatewayv2DomainNameDomainNameConfiguration getDomainNameConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mutualTlsAuthenticationInput`<sup>Optional</sup> <a name="mutualTlsAuthenticationInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthenticationInput"></a>

```java
public Apigatewayv2DomainNameMutualTlsAuthentication getMutualTlsAuthenticationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2DomainNameConfig <a name="Apigatewayv2DomainNameConfig" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_domain_name.Apigatewayv2DomainNameConfig;

Apigatewayv2DomainNameConfig.builder()
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
    .domainNameConfiguration(Apigatewayv2DomainNameDomainNameConfiguration)
//  .id(java.lang.String)
//  .mutualTlsAuthentication(Apigatewayv2DomainNameMutualTlsAuthentication)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Apigatewayv2DomainNameTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#domain_name Apigatewayv2DomainName#domain_name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainNameConfiguration">domainNameConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a></code> | domain_name_configuration block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#id Apigatewayv2DomainName#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.mutualTlsAuthentication">mutualTlsAuthentication</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | mutual_tls_authentication block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags Apigatewayv2DomainName#tags}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags_all Apigatewayv2DomainName#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#domain_name Apigatewayv2DomainName#domain_name}.

---

##### `domainNameConfiguration`<sup>Required</sup> <a name="domainNameConfiguration" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainNameConfiguration"></a>

```java
public Apigatewayv2DomainNameDomainNameConfiguration getDomainNameConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a>

domain_name_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#domain_name_configuration Apigatewayv2DomainName#domain_name_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#id Apigatewayv2DomainName#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mutualTlsAuthentication`<sup>Optional</sup> <a name="mutualTlsAuthentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.mutualTlsAuthentication"></a>

```java
public Apigatewayv2DomainNameMutualTlsAuthentication getMutualTlsAuthentication();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

mutual_tls_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#mutual_tls_authentication Apigatewayv2DomainName#mutual_tls_authentication}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags Apigatewayv2DomainName#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags_all Apigatewayv2DomainName#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.timeouts"></a>

```java
public Apigatewayv2DomainNameTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#timeouts Apigatewayv2DomainName#timeouts}

---

### Apigatewayv2DomainNameDomainNameConfiguration <a name="Apigatewayv2DomainNameDomainNameConfiguration" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_domain_name.Apigatewayv2DomainNameDomainNameConfiguration;

Apigatewayv2DomainNameDomainNameConfiguration.builder()
    .certificateArn(java.lang.String)
    .endpointType(java.lang.String)
    .securityPolicy(java.lang.String)
//  .ownershipVerificationCertificateArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#certificate_arn Apigatewayv2DomainName#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#endpoint_type Apigatewayv2DomainName#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#security_policy Apigatewayv2DomainName#security_policy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.ownershipVerificationCertificateArn">ownershipVerificationCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#ownership_verification_certificate_arn Apigatewayv2DomainName#ownership_verification_certificate_arn}. |

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#certificate_arn Apigatewayv2DomainName#certificate_arn}.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#endpoint_type Apigatewayv2DomainName#endpoint_type}.

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#security_policy Apigatewayv2DomainName#security_policy}.

---

##### `ownershipVerificationCertificateArn`<sup>Optional</sup> <a name="ownershipVerificationCertificateArn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.ownershipVerificationCertificateArn"></a>

```java
public java.lang.String getOwnershipVerificationCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#ownership_verification_certificate_arn Apigatewayv2DomainName#ownership_verification_certificate_arn}.

---

### Apigatewayv2DomainNameMutualTlsAuthentication <a name="Apigatewayv2DomainNameMutualTlsAuthentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_domain_name.Apigatewayv2DomainNameMutualTlsAuthentication;

Apigatewayv2DomainNameMutualTlsAuthentication.builder()
    .truststoreUri(java.lang.String)
//  .truststoreVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreUri">truststoreUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#truststore_uri Apigatewayv2DomainName#truststore_uri}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreVersion">truststoreVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#truststore_version Apigatewayv2DomainName#truststore_version}. |

---

##### `truststoreUri`<sup>Required</sup> <a name="truststoreUri" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreUri"></a>

```java
public java.lang.String getTruststoreUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#truststore_uri Apigatewayv2DomainName#truststore_uri}.

---

##### `truststoreVersion`<sup>Optional</sup> <a name="truststoreVersion" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

```java
public java.lang.String getTruststoreVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#truststore_version Apigatewayv2DomainName#truststore_version}.

---

### Apigatewayv2DomainNameTimeouts <a name="Apigatewayv2DomainNameTimeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_domain_name.Apigatewayv2DomainNameTimeouts;

Apigatewayv2DomainNameTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#create Apigatewayv2DomainName#create}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#update Apigatewayv2DomainName#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#create Apigatewayv2DomainName#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#update Apigatewayv2DomainName#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2DomainNameDomainNameConfigurationOutputReference <a name="Apigatewayv2DomainNameDomainNameConfigurationOutputReference" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_domain_name.Apigatewayv2DomainNameDomainNameConfigurationOutputReference;

new Apigatewayv2DomainNameDomainNameConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.resetOwnershipVerificationCertificateArn">resetOwnershipVerificationCertificateArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOwnershipVerificationCertificateArn` <a name="resetOwnershipVerificationCertificateArn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.resetOwnershipVerificationCertificateArn"></a>

```java
public void resetOwnershipVerificationCertificateArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.targetDomainName">targetDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.endpointTypeInput">endpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.ownershipVerificationCertificateArnInput">ownershipVerificationCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.securityPolicyInput">securityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.ownershipVerificationCertificateArn">ownershipVerificationCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `targetDomainName`<sup>Required</sup> <a name="targetDomainName" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.targetDomainName"></a>

```java
public java.lang.String getTargetDomainName();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.endpointTypeInput"></a>

```java
public java.lang.String getEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `ownershipVerificationCertificateArnInput`<sup>Optional</sup> <a name="ownershipVerificationCertificateArnInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.ownershipVerificationCertificateArnInput"></a>

```java
public java.lang.String getOwnershipVerificationCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.securityPolicyInput"></a>

```java
public java.lang.String getSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `ownershipVerificationCertificateArn`<sup>Required</sup> <a name="ownershipVerificationCertificateArn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.ownershipVerificationCertificateArn"></a>

```java
public java.lang.String getOwnershipVerificationCertificateArn();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.internalValue"></a>

```java
public Apigatewayv2DomainNameDomainNameConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a>

---


### Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference <a name="Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_domain_name.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference;

new Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion">resetTruststoreVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTruststoreVersion` <a name="resetTruststoreVersion" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion"></a>

```java
public void resetTruststoreVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput">truststoreUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput">truststoreVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri">truststoreUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion">truststoreVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `truststoreUriInput`<sup>Optional</sup> <a name="truststoreUriInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput"></a>

```java
public java.lang.String getTruststoreUriInput();
```

- *Type:* java.lang.String

---

##### `truststoreVersionInput`<sup>Optional</sup> <a name="truststoreVersionInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput"></a>

```java
public java.lang.String getTruststoreVersionInput();
```

- *Type:* java.lang.String

---

##### `truststoreUri`<sup>Required</sup> <a name="truststoreUri" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri"></a>

```java
public java.lang.String getTruststoreUri();
```

- *Type:* java.lang.String

---

##### `truststoreVersion`<sup>Required</sup> <a name="truststoreVersion" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion"></a>

```java
public java.lang.String getTruststoreVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.internalValue"></a>

```java
public Apigatewayv2DomainNameMutualTlsAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

---


### Apigatewayv2DomainNameTimeoutsOutputReference <a name="Apigatewayv2DomainNameTimeoutsOutputReference" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_domain_name.Apigatewayv2DomainNameTimeoutsOutputReference;

new Apigatewayv2DomainNameTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



