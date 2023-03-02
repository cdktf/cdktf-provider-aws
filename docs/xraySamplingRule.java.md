# `xraySamplingRule` Submodule <a name="`xraySamplingRule` Submodule" id="@cdktf/provider-aws.xraySamplingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### XraySamplingRule <a name="XraySamplingRule" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule aws_xray_sampling_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.xray_sampling_rule.XraySamplingRule;

XraySamplingRule.Builder.create(Construct scope, java.lang.String id)
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
    .fixedRate(java.lang.Number)
    .host(java.lang.String)
    .httpMethod(java.lang.String)
    .priority(java.lang.Number)
    .reservoirSize(java.lang.Number)
    .resourceArn(java.lang.String)
    .serviceName(java.lang.String)
    .serviceType(java.lang.String)
    .urlPath(java.lang.String)
    .version(java.lang.Number)
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .ruleName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.fixedRate">fixedRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#host XraySamplingRule#host}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#http_method XraySamplingRule#http_method}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#priority XraySamplingRule#priority}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.reservoirSize">reservoirSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_name XraySamplingRule#service_name}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_type XraySamplingRule#service_type}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.urlPath">urlPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#url_path XraySamplingRule#url_path}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.version">version</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#version XraySamplingRule#version}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#attributes XraySamplingRule#attributes}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#id XraySamplingRule#id}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#rule_name XraySamplingRule#rule_name}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags XraySamplingRule#tags}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags_all XraySamplingRule#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fixedRate`<sup>Required</sup> <a name="fixedRate" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.fixedRate"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.host"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#host XraySamplingRule#host}.

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.httpMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#http_method XraySamplingRule#http_method}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#priority XraySamplingRule#priority}.

---

##### `reservoirSize`<sup>Required</sup> <a name="reservoirSize" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.reservoirSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}.

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.resourceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_name XraySamplingRule#service_name}.

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.serviceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_type XraySamplingRule#service_type}.

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.urlPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#url_path XraySamplingRule#url_path}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.version"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#version XraySamplingRule#version}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.attributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#attributes XraySamplingRule#attributes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#id XraySamplingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.ruleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#rule_name XraySamplingRule#rule_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags XraySamplingRule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags_all XraySamplingRule#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetAttributes"></a>

```java
public void resetAttributes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetId"></a>

```java
public void resetId()
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetRuleName"></a>

```java
public void resetRuleName()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.xray_sampling_rule.XraySamplingRule;

XraySamplingRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.xray_sampling_rule.XraySamplingRule;

XraySamplingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.xray_sampling_rule.XraySamplingRule;

XraySamplingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.attributesInput">attributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fixedRateInput">fixedRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.reservoirSizeInput">reservoirSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceTypeInput">serviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.urlPathInput">urlPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.versionInput">versionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fixedRate">fixedRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.reservoirSize">reservoirSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.urlPath">urlPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.attributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fixedRateInput`<sup>Optional</sup> <a name="fixedRateInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fixedRateInput"></a>

```java
public java.lang.Number getFixedRateInput();
```

- *Type:* java.lang.Number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `reservoirSizeInput`<sup>Optional</sup> <a name="reservoirSizeInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.reservoirSizeInput"></a>

```java
public java.lang.Number getReservoirSizeInput();
```

- *Type:* java.lang.Number

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceTypeInput"></a>

```java
public java.lang.String getServiceTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `urlPathInput`<sup>Optional</sup> <a name="urlPathInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.urlPathInput"></a>

```java
public java.lang.String getUrlPathInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.versionInput"></a>

```java
public java.lang.Number getVersionInput();
```

- *Type:* java.lang.Number

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fixedRate`<sup>Required</sup> <a name="fixedRate" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.fixedRate"></a>

```java
public java.lang.Number getFixedRate();
```

- *Type:* java.lang.Number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `reservoirSize`<sup>Required</sup> <a name="reservoirSize" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.reservoirSize"></a>

```java
public java.lang.Number getReservoirSize();
```

- *Type:* java.lang.Number

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.urlPath"></a>

```java
public java.lang.String getUrlPath();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### XraySamplingRuleConfig <a name="XraySamplingRuleConfig" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.xray_sampling_rule.XraySamplingRuleConfig;

XraySamplingRuleConfig.builder()
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
    .fixedRate(java.lang.Number)
    .host(java.lang.String)
    .httpMethod(java.lang.String)
    .priority(java.lang.Number)
    .reservoirSize(java.lang.Number)
    .resourceArn(java.lang.String)
    .serviceName(java.lang.String)
    .serviceType(java.lang.String)
    .urlPath(java.lang.String)
    .version(java.lang.Number)
//  .attributes(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .ruleName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.fixedRate">fixedRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#host XraySamplingRule#host}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#http_method XraySamplingRule#http_method}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#priority XraySamplingRule#priority}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.reservoirSize">reservoirSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_name XraySamplingRule#service_name}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_type XraySamplingRule#service_type}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.urlPath">urlPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#url_path XraySamplingRule#url_path}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.version">version</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#version XraySamplingRule#version}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.attributes">attributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#attributes XraySamplingRule#attributes}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#id XraySamplingRule#id}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#rule_name XraySamplingRule#rule_name}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags XraySamplingRule#tags}. |
| <code><a href="#@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags_all XraySamplingRule#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fixedRate`<sup>Required</sup> <a name="fixedRate" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.fixedRate"></a>

```java
public java.lang.Number getFixedRate();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#fixed_rate XraySamplingRule#fixed_rate}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#host XraySamplingRule#host}.

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#http_method XraySamplingRule#http_method}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#priority XraySamplingRule#priority}.

---

##### `reservoirSize`<sup>Required</sup> <a name="reservoirSize" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.reservoirSize"></a>

```java
public java.lang.Number getReservoirSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#reservoir_size XraySamplingRule#reservoir_size}.

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#resource_arn XraySamplingRule#resource_arn}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_name XraySamplingRule#service_name}.

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#service_type XraySamplingRule#service_type}.

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.urlPath"></a>

```java
public java.lang.String getUrlPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#url_path XraySamplingRule#url_path}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#version XraySamplingRule#version}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.attributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#attributes XraySamplingRule#attributes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#id XraySamplingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#rule_name XraySamplingRule#rule_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags XraySamplingRule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.xraySamplingRule.XraySamplingRuleConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_sampling_rule#tags_all XraySamplingRule#tags_all}.

---



