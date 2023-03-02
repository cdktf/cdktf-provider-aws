# `cloudfrontOriginRequestPolicy` Submodule <a name="`cloudfrontOriginRequestPolicy` Submodule" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontOriginRequestPolicy <a name="CloudfrontOriginRequestPolicy" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy aws_cloudfront_origin_request_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicy;

CloudfrontOriginRequestPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .cookiesConfig(CloudfrontOriginRequestPolicyCookiesConfig)
    .headersConfig(CloudfrontOriginRequestPolicyHeadersConfig)
    .name(java.lang.String)
    .queryStringsConfig(CloudfrontOriginRequestPolicyQueryStringsConfig)
//  .comment(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.cookiesConfig">cookiesConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a></code> | cookies_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.headersConfig">headersConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a></code> | headers_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#name CloudfrontOriginRequestPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.queryStringsConfig">queryStringsConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a></code> | query_strings_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#comment CloudfrontOriginRequestPolicy#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#id CloudfrontOriginRequestPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cookiesConfig`<sup>Required</sup> <a name="cookiesConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.cookiesConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a>

cookies_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookies_config CloudfrontOriginRequestPolicy#cookies_config}

---

##### `headersConfig`<sup>Required</sup> <a name="headersConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.headersConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a>

headers_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#headers_config CloudfrontOriginRequestPolicy#headers_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#name CloudfrontOriginRequestPolicy#name}.

---

##### `queryStringsConfig`<sup>Required</sup> <a name="queryStringsConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.queryStringsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a>

query_strings_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_strings_config CloudfrontOriginRequestPolicy#query_strings_config}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#comment CloudfrontOriginRequestPolicy#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#id CloudfrontOriginRequestPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putCookiesConfig">putCookiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putHeadersConfig">putHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putQueryStringsConfig">putQueryStringsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCookiesConfig` <a name="putCookiesConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putCookiesConfig"></a>

```java
public void putCookiesConfig(CloudfrontOriginRequestPolicyCookiesConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putCookiesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a>

---

##### `putHeadersConfig` <a name="putHeadersConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putHeadersConfig"></a>

```java
public void putHeadersConfig(CloudfrontOriginRequestPolicyHeadersConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putHeadersConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a>

---

##### `putQueryStringsConfig` <a name="putQueryStringsConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putQueryStringsConfig"></a>

```java
public void putQueryStringsConfig(CloudfrontOriginRequestPolicyQueryStringsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.putQueryStringsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicy;

CloudfrontOriginRequestPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicy;

CloudfrontOriginRequestPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicy;

CloudfrontOriginRequestPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cookiesConfig">cookiesConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference">CloudfrontOriginRequestPolicyCookiesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.headersConfig">headersConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference">CloudfrontOriginRequestPolicyHeadersConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.queryStringsConfig">queryStringsConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference">CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cookiesConfigInput">cookiesConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.headersConfigInput">headersConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.queryStringsConfigInput">queryStringsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cookiesConfig`<sup>Required</sup> <a name="cookiesConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cookiesConfig"></a>

```java
public CloudfrontOriginRequestPolicyCookiesConfigOutputReference getCookiesConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference">CloudfrontOriginRequestPolicyCookiesConfigOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `headersConfig`<sup>Required</sup> <a name="headersConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.headersConfig"></a>

```java
public CloudfrontOriginRequestPolicyHeadersConfigOutputReference getHeadersConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference">CloudfrontOriginRequestPolicyHeadersConfigOutputReference</a>

---

##### `queryStringsConfig`<sup>Required</sup> <a name="queryStringsConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.queryStringsConfig"></a>

```java
public CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference getQueryStringsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference">CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `cookiesConfigInput`<sup>Optional</sup> <a name="cookiesConfigInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.cookiesConfigInput"></a>

```java
public CloudfrontOriginRequestPolicyCookiesConfig getCookiesConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a>

---

##### `headersConfigInput`<sup>Optional</sup> <a name="headersConfigInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.headersConfigInput"></a>

```java
public CloudfrontOriginRequestPolicyHeadersConfig getHeadersConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryStringsConfigInput`<sup>Optional</sup> <a name="queryStringsConfigInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.queryStringsConfigInput"></a>

```java
public CloudfrontOriginRequestPolicyQueryStringsConfig getQueryStringsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontOriginRequestPolicyConfig <a name="CloudfrontOriginRequestPolicyConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyConfig;

CloudfrontOriginRequestPolicyConfig.builder()
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
    .cookiesConfig(CloudfrontOriginRequestPolicyCookiesConfig)
    .headersConfig(CloudfrontOriginRequestPolicyHeadersConfig)
    .name(java.lang.String)
    .queryStringsConfig(CloudfrontOriginRequestPolicyQueryStringsConfig)
//  .comment(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.cookiesConfig">cookiesConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a></code> | cookies_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.headersConfig">headersConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a></code> | headers_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#name CloudfrontOriginRequestPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.queryStringsConfig">queryStringsConfig</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a></code> | query_strings_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#comment CloudfrontOriginRequestPolicy#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#id CloudfrontOriginRequestPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cookiesConfig`<sup>Required</sup> <a name="cookiesConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.cookiesConfig"></a>

```java
public CloudfrontOriginRequestPolicyCookiesConfig getCookiesConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a>

cookies_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookies_config CloudfrontOriginRequestPolicy#cookies_config}

---

##### `headersConfig`<sup>Required</sup> <a name="headersConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.headersConfig"></a>

```java
public CloudfrontOriginRequestPolicyHeadersConfig getHeadersConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a>

headers_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#headers_config CloudfrontOriginRequestPolicy#headers_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#name CloudfrontOriginRequestPolicy#name}.

---

##### `queryStringsConfig`<sup>Required</sup> <a name="queryStringsConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.queryStringsConfig"></a>

```java
public CloudfrontOriginRequestPolicyQueryStringsConfig getQueryStringsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a>

query_strings_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_strings_config CloudfrontOriginRequestPolicy#query_strings_config}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#comment CloudfrontOriginRequestPolicy#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#id CloudfrontOriginRequestPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudfrontOriginRequestPolicyCookiesConfig <a name="CloudfrontOriginRequestPolicyCookiesConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyCookiesConfig;

CloudfrontOriginRequestPolicyCookiesConfig.builder()
    .cookieBehavior(java.lang.String)
//  .cookies(CloudfrontOriginRequestPolicyCookiesConfigCookies)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig.property.cookieBehavior">cookieBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookie_behavior CloudfrontOriginRequestPolicy#cookie_behavior}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig.property.cookies">cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a></code> | cookies block. |

---

##### `cookieBehavior`<sup>Required</sup> <a name="cookieBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig.property.cookieBehavior"></a>

```java
public java.lang.String getCookieBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookie_behavior CloudfrontOriginRequestPolicy#cookie_behavior}.

---

##### `cookies`<sup>Optional</sup> <a name="cookies" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig.property.cookies"></a>

```java
public CloudfrontOriginRequestPolicyCookiesConfigCookies getCookies();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a>

cookies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#cookies CloudfrontOriginRequestPolicy#cookies}

---

### CloudfrontOriginRequestPolicyCookiesConfigCookies <a name="CloudfrontOriginRequestPolicyCookiesConfigCookies" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyCookiesConfigCookies;

CloudfrontOriginRequestPolicyCookiesConfigCookies.builder()
//  .items(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}. |

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}.

---

### CloudfrontOriginRequestPolicyHeadersConfig <a name="CloudfrontOriginRequestPolicyHeadersConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyHeadersConfig;

CloudfrontOriginRequestPolicyHeadersConfig.builder()
//  .headerBehavior(java.lang.String)
//  .headers(CloudfrontOriginRequestPolicyHeadersConfigHeaders)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig.property.headerBehavior">headerBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#header_behavior CloudfrontOriginRequestPolicy#header_behavior}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a></code> | headers block. |

---

##### `headerBehavior`<sup>Optional</sup> <a name="headerBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig.property.headerBehavior"></a>

```java
public java.lang.String getHeaderBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#header_behavior CloudfrontOriginRequestPolicy#header_behavior}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig.property.headers"></a>

```java
public CloudfrontOriginRequestPolicyHeadersConfigHeaders getHeaders();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a>

headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#headers CloudfrontOriginRequestPolicy#headers}

---

### CloudfrontOriginRequestPolicyHeadersConfigHeaders <a name="CloudfrontOriginRequestPolicyHeadersConfigHeaders" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyHeadersConfigHeaders;

CloudfrontOriginRequestPolicyHeadersConfigHeaders.builder()
//  .items(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}. |

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}.

---

### CloudfrontOriginRequestPolicyQueryStringsConfig <a name="CloudfrontOriginRequestPolicyQueryStringsConfig" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyQueryStringsConfig;

CloudfrontOriginRequestPolicyQueryStringsConfig.builder()
    .queryStringBehavior(java.lang.String)
//  .queryStrings(CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig.property.queryStringBehavior">queryStringBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_string_behavior CloudfrontOriginRequestPolicy#query_string_behavior}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig.property.queryStrings">queryStrings</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a></code> | query_strings block. |

---

##### `queryStringBehavior`<sup>Required</sup> <a name="queryStringBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig.property.queryStringBehavior"></a>

```java
public java.lang.String getQueryStringBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_string_behavior CloudfrontOriginRequestPolicy#query_string_behavior}.

---

##### `queryStrings`<sup>Optional</sup> <a name="queryStrings" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig.property.queryStrings"></a>

```java
public CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings getQueryStrings();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a>

query_strings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#query_strings CloudfrontOriginRequestPolicy#query_strings}

---

### CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings <a name="CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings;

CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings.builder()
//  .items(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}. |

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy#items CloudfrontOriginRequestPolicy#items}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference <a name="CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference;

new CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetItems` <a name="resetItems" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.itemsInput">itemsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.itemsInput"></a>

```java
public java.util.List<java.lang.String> getItemsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference.property.internalValue"></a>

```java
public CloudfrontOriginRequestPolicyCookiesConfigCookies getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a>

---


### CloudfrontOriginRequestPolicyCookiesConfigOutputReference <a name="CloudfrontOriginRequestPolicyCookiesConfigOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference;

new CloudfrontOriginRequestPolicyCookiesConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.putCookies">putCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.resetCookies">resetCookies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCookies` <a name="putCookies" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.putCookies"></a>

```java
public void putCookies(CloudfrontOriginRequestPolicyCookiesConfigCookies value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.putCookies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a>

---

##### `resetCookies` <a name="resetCookies" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.resetCookies"></a>

```java
public void resetCookies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookies">cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference">CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehaviorInput">cookieBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookiesInput">cookiesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehavior">cookieBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookies"></a>

```java
public CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference getCookies();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference">CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference</a>

---

##### `cookieBehaviorInput`<sup>Optional</sup> <a name="cookieBehaviorInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehaviorInput"></a>

```java
public java.lang.String getCookieBehaviorInput();
```

- *Type:* java.lang.String

---

##### `cookiesInput`<sup>Optional</sup> <a name="cookiesInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookiesInput"></a>

```java
public CloudfrontOriginRequestPolicyCookiesConfigCookies getCookiesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigCookies">CloudfrontOriginRequestPolicyCookiesConfigCookies</a>

---

##### `cookieBehavior`<sup>Required</sup> <a name="cookieBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.cookieBehavior"></a>

```java
public java.lang.String getCookieBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfigOutputReference.property.internalValue"></a>

```java
public CloudfrontOriginRequestPolicyCookiesConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyCookiesConfig">CloudfrontOriginRequestPolicyCookiesConfig</a>

---


### CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference <a name="CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference;

new CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetItems` <a name="resetItems" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.itemsInput">itemsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.itemsInput"></a>

```java
public java.util.List<java.lang.String> getItemsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference.property.internalValue"></a>

```java
public CloudfrontOriginRequestPolicyHeadersConfigHeaders getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a>

---


### CloudfrontOriginRequestPolicyHeadersConfigOutputReference <a name="CloudfrontOriginRequestPolicyHeadersConfigOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference;

new CloudfrontOriginRequestPolicyHeadersConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resetHeaderBehavior">resetHeaderBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.putHeaders"></a>

```java
public void putHeaders(CloudfrontOriginRequestPolicyHeadersConfigHeaders value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.putHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a>

---

##### `resetHeaderBehavior` <a name="resetHeaderBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resetHeaderBehavior"></a>

```java
public void resetHeaderBehavior()
```

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.resetHeaders"></a>

```java
public void resetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference">CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehaviorInput">headerBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headersInput">headersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehavior">headerBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headers"></a>

```java
public CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference getHeaders();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference">CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference</a>

---

##### `headerBehaviorInput`<sup>Optional</sup> <a name="headerBehaviorInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehaviorInput"></a>

```java
public java.lang.String getHeaderBehaviorInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headersInput"></a>

```java
public CloudfrontOriginRequestPolicyHeadersConfigHeaders getHeadersInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigHeaders">CloudfrontOriginRequestPolicyHeadersConfigHeaders</a>

---

##### `headerBehavior`<sup>Required</sup> <a name="headerBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.headerBehavior"></a>

```java
public java.lang.String getHeaderBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfigOutputReference.property.internalValue"></a>

```java
public CloudfrontOriginRequestPolicyHeadersConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyHeadersConfig">CloudfrontOriginRequestPolicyHeadersConfig</a>

---


### CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference <a name="CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference;

new CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.putQueryStrings">putQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resetQueryStrings">resetQueryStrings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQueryStrings` <a name="putQueryStrings" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.putQueryStrings"></a>

```java
public void putQueryStrings(CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.putQueryStrings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a>

---

##### `resetQueryStrings` <a name="resetQueryStrings" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.resetQueryStrings"></a>

```java
public void resetQueryStrings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStrings">queryStrings</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehaviorInput">queryStringBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringsInput">queryStringsInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehavior">queryStringBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryStrings`<sup>Required</sup> <a name="queryStrings" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStrings"></a>

```java
public CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference getQueryStrings();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference</a>

---

##### `queryStringBehaviorInput`<sup>Optional</sup> <a name="queryStringBehaviorInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehaviorInput"></a>

```java
public java.lang.String getQueryStringBehaviorInput();
```

- *Type:* java.lang.String

---

##### `queryStringsInput`<sup>Optional</sup> <a name="queryStringsInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringsInput"></a>

```java
public CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings getQueryStringsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a>

---

##### `queryStringBehavior`<sup>Required</sup> <a name="queryStringBehavior" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.queryStringBehavior"></a>

```java
public java.lang.String getQueryStringBehavior();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference.property.internalValue"></a>

```java
public CloudfrontOriginRequestPolicyQueryStringsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfig">CloudfrontOriginRequestPolicyQueryStringsConfig</a>

---


### CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference <a name="CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudfront_origin_request_policy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference;

new CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetItems` <a name="resetItems" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.itemsInput">itemsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.items">items</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.itemsInput"></a>

```java
public java.util.List<java.lang.String> getItemsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.items"></a>

```java
public java.util.List<java.lang.String> getItems();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference.property.internalValue"></a>

```java
public CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginRequestPolicy.CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings">CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings</a>

---



