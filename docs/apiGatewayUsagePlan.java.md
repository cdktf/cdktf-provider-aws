# `apiGatewayUsagePlan` Submodule <a name="`apiGatewayUsagePlan` Submodule" id="@cdktf/provider-aws.apiGatewayUsagePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayUsagePlan <a name="ApiGatewayUsagePlan" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan aws_api_gateway_usage_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_usage_plan.ApiGatewayUsagePlan;

ApiGatewayUsagePlan.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .apiStages(IResolvable)
//  .apiStages(java.util.List<ApiGatewayUsagePlanApiStages>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .productCode(java.lang.String)
//  .quotaSettings(ApiGatewayUsagePlanQuotaSettings)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .throttleSettings(ApiGatewayUsagePlanThrottleSettings)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#name ApiGatewayUsagePlan#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.apiStages">apiStages</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>></code> | api_stages block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#description ApiGatewayUsagePlan#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#id ApiGatewayUsagePlan#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.productCode">productCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#product_code ApiGatewayUsagePlan#product_code}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.quotaSettings">quotaSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | quota_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags ApiGatewayUsagePlan#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags_all ApiGatewayUsagePlan#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.throttleSettings">throttleSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | throttle_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#name ApiGatewayUsagePlan#name}.

---

##### `apiStages`<sup>Optional</sup> <a name="apiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.apiStages"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>>

api_stages block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#api_stages ApiGatewayUsagePlan#api_stages}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#description ApiGatewayUsagePlan#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#id ApiGatewayUsagePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `productCode`<sup>Optional</sup> <a name="productCode" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.productCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#product_code ApiGatewayUsagePlan#product_code}.

---

##### `quotaSettings`<sup>Optional</sup> <a name="quotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.quotaSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

quota_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#quota_settings ApiGatewayUsagePlan#quota_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags ApiGatewayUsagePlan#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags_all ApiGatewayUsagePlan#tags_all}.

---

##### `throttleSettings`<sup>Optional</sup> <a name="throttleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.Initializer.parameter.throttleSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

throttle_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#throttle_settings ApiGatewayUsagePlan#throttle_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putApiStages">putApiStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings">putQuotaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings">putThrottleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetApiStages">resetApiStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetProductCode">resetProductCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetQuotaSettings">resetQuotaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetThrottleSettings">resetThrottleSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putApiStages` <a name="putApiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putApiStages"></a>

```java
public void putApiStages(IResolvable OR java.util.List<ApiGatewayUsagePlanApiStages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putApiStages.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>>

---

##### `putQuotaSettings` <a name="putQuotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings"></a>

```java
public void putQuotaSettings(ApiGatewayUsagePlanQuotaSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putQuotaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

---

##### `putThrottleSettings` <a name="putThrottleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings"></a>

```java
public void putThrottleSettings(ApiGatewayUsagePlanThrottleSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.putThrottleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

---

##### `resetApiStages` <a name="resetApiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetApiStages"></a>

```java
public void resetApiStages()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetId"></a>

```java
public void resetId()
```

##### `resetProductCode` <a name="resetProductCode" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetProductCode"></a>

```java
public void resetProductCode()
```

##### `resetQuotaSettings` <a name="resetQuotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetQuotaSettings"></a>

```java
public void resetQuotaSettings()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetThrottleSettings` <a name="resetThrottleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.resetThrottleSettings"></a>

```java
public void resetThrottleSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_usage_plan.ApiGatewayUsagePlan;

ApiGatewayUsagePlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_usage_plan.ApiGatewayUsagePlan;

ApiGatewayUsagePlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_usage_plan.ApiGatewayUsagePlan;

ApiGatewayUsagePlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStages">apiStages</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList">ApiGatewayUsagePlanApiStagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettings">quotaSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference">ApiGatewayUsagePlanQuotaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettings">throttleSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference">ApiGatewayUsagePlanThrottleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStagesInput">apiStagesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCodeInput">productCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettingsInput">quotaSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettingsInput">throttleSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCode">productCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiStages`<sup>Required</sup> <a name="apiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStages"></a>

```java
public ApiGatewayUsagePlanApiStagesList getApiStages();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList">ApiGatewayUsagePlanApiStagesList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `quotaSettings`<sup>Required</sup> <a name="quotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettings"></a>

```java
public ApiGatewayUsagePlanQuotaSettingsOutputReference getQuotaSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference">ApiGatewayUsagePlanQuotaSettingsOutputReference</a>

---

##### `throttleSettings`<sup>Required</sup> <a name="throttleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettings"></a>

```java
public ApiGatewayUsagePlanThrottleSettingsOutputReference getThrottleSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference">ApiGatewayUsagePlanThrottleSettingsOutputReference</a>

---

##### `apiStagesInput`<sup>Optional</sup> <a name="apiStagesInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.apiStagesInput"></a>

```java
public java.lang.Object getApiStagesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `productCodeInput`<sup>Optional</sup> <a name="productCodeInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCodeInput"></a>

```java
public java.lang.String getProductCodeInput();
```

- *Type:* java.lang.String

---

##### `quotaSettingsInput`<sup>Optional</sup> <a name="quotaSettingsInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.quotaSettingsInput"></a>

```java
public ApiGatewayUsagePlanQuotaSettings getQuotaSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `throttleSettingsInput`<sup>Optional</sup> <a name="throttleSettingsInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.throttleSettingsInput"></a>

```java
public ApiGatewayUsagePlanThrottleSettings getThrottleSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `productCode`<sup>Required</sup> <a name="productCode" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.productCode"></a>

```java
public java.lang.String getProductCode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayUsagePlanApiStages <a name="ApiGatewayUsagePlanApiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_usage_plan.ApiGatewayUsagePlanApiStages;

ApiGatewayUsagePlanApiStages.builder()
    .apiId(java.lang.String)
    .stage(java.lang.String)
//  .throttle(IResolvable)
//  .throttle(java.util.List<ApiGatewayUsagePlanApiStagesThrottle>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#api_id ApiGatewayUsagePlan#api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.stage">stage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#stage ApiGatewayUsagePlan#stage}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.throttle">throttle</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>></code> | throttle block. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#api_id ApiGatewayUsagePlan#api_id}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#stage ApiGatewayUsagePlan#stage}.

---

##### `throttle`<sup>Optional</sup> <a name="throttle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages.property.throttle"></a>

```java
public java.lang.Object getThrottle();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>>

throttle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#throttle ApiGatewayUsagePlan#throttle}

---

### ApiGatewayUsagePlanApiStagesThrottle <a name="ApiGatewayUsagePlanApiStagesThrottle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_usage_plan.ApiGatewayUsagePlanApiStagesThrottle;

ApiGatewayUsagePlanApiStagesThrottle.builder()
    .path(java.lang.String)
//  .burstLimit(java.lang.Number)
//  .rateLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#path ApiGatewayUsagePlan#path}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.burstLimit">burstLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#path ApiGatewayUsagePlan#path}.

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.burstLimit"></a>

```java
public java.lang.Number getBurstLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}.

---

### ApiGatewayUsagePlanConfig <a name="ApiGatewayUsagePlanConfig" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_usage_plan.ApiGatewayUsagePlanConfig;

ApiGatewayUsagePlanConfig.builder()
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
    .name(java.lang.String)
//  .apiStages(IResolvable)
//  .apiStages(java.util.List<ApiGatewayUsagePlanApiStages>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .productCode(java.lang.String)
//  .quotaSettings(ApiGatewayUsagePlanQuotaSettings)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .throttleSettings(ApiGatewayUsagePlanThrottleSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#name ApiGatewayUsagePlan#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.apiStages">apiStages</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>></code> | api_stages block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#description ApiGatewayUsagePlan#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#id ApiGatewayUsagePlan#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.productCode">productCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#product_code ApiGatewayUsagePlan#product_code}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.quotaSettings">quotaSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | quota_settings block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags ApiGatewayUsagePlan#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags_all ApiGatewayUsagePlan#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.throttleSettings">throttleSettings</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | throttle_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#name ApiGatewayUsagePlan#name}.

---

##### `apiStages`<sup>Optional</sup> <a name="apiStages" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.apiStages"></a>

```java
public java.lang.Object getApiStages();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>>

api_stages block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#api_stages ApiGatewayUsagePlan#api_stages}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#description ApiGatewayUsagePlan#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#id ApiGatewayUsagePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `productCode`<sup>Optional</sup> <a name="productCode" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.productCode"></a>

```java
public java.lang.String getProductCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#product_code ApiGatewayUsagePlan#product_code}.

---

##### `quotaSettings`<sup>Optional</sup> <a name="quotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.quotaSettings"></a>

```java
public ApiGatewayUsagePlanQuotaSettings getQuotaSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

quota_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#quota_settings ApiGatewayUsagePlan#quota_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags ApiGatewayUsagePlan#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#tags_all ApiGatewayUsagePlan#tags_all}.

---

##### `throttleSettings`<sup>Optional</sup> <a name="throttleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanConfig.property.throttleSettings"></a>

```java
public ApiGatewayUsagePlanThrottleSettings getThrottleSettings();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

throttle_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#throttle_settings ApiGatewayUsagePlan#throttle_settings}

---

### ApiGatewayUsagePlanQuotaSettings <a name="ApiGatewayUsagePlanQuotaSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_usage_plan.ApiGatewayUsagePlanQuotaSettings;

ApiGatewayUsagePlanQuotaSettings.builder()
    .limit(java.lang.Number)
    .period(java.lang.String)
//  .offset(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.limit">limit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#limit ApiGatewayUsagePlan#limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.period">period</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#period ApiGatewayUsagePlan#period}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.offset">offset</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#offset ApiGatewayUsagePlan#offset}. |

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#limit ApiGatewayUsagePlan#limit}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#period ApiGatewayUsagePlan#period}.

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings.property.offset"></a>

```java
public java.lang.Number getOffset();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#offset ApiGatewayUsagePlan#offset}.

---

### ApiGatewayUsagePlanThrottleSettings <a name="ApiGatewayUsagePlanThrottleSettings" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_usage_plan.ApiGatewayUsagePlanThrottleSettings;

ApiGatewayUsagePlanThrottleSettings.builder()
//  .burstLimit(java.lang.Number)
//  .rateLimit(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.burstLimit">burstLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}. |

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.burstLimit"></a>

```java
public java.lang.Number getBurstLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#burst_limit ApiGatewayUsagePlan#burst_limit}.

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan#rate_limit ApiGatewayUsagePlan#rate_limit}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayUsagePlanApiStagesList <a name="ApiGatewayUsagePlanApiStagesList" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_usage_plan.ApiGatewayUsagePlanApiStagesList;

new ApiGatewayUsagePlanApiStagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.get"></a>

```java
public ApiGatewayUsagePlanApiStagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a>>

---


### ApiGatewayUsagePlanApiStagesOutputReference <a name="ApiGatewayUsagePlanApiStagesOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_usage_plan.ApiGatewayUsagePlanApiStagesOutputReference;

new ApiGatewayUsagePlanApiStagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.putThrottle">putThrottle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resetThrottle">resetThrottle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putThrottle` <a name="putThrottle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.putThrottle"></a>

```java
public void putThrottle(IResolvable OR java.util.List<ApiGatewayUsagePlanApiStagesThrottle> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.putThrottle.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>>

---

##### `resetThrottle` <a name="resetThrottle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.resetThrottle"></a>

```java
public void resetThrottle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttle">throttle</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList">ApiGatewayUsagePlanApiStagesThrottleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stageInput">stageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttleInput">throttleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `throttle`<sup>Required</sup> <a name="throttle" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttle"></a>

```java
public ApiGatewayUsagePlanApiStagesThrottleList getThrottle();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList">ApiGatewayUsagePlanApiStagesThrottleList</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stageInput"></a>

```java
public java.lang.String getStageInput();
```

- *Type:* java.lang.String

---

##### `throttleInput`<sup>Optional</sup> <a name="throttleInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.throttleInput"></a>

```java
public java.lang.Object getThrottleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStages">ApiGatewayUsagePlanApiStages</a> OR com.hashicorp.cdktf.IResolvable

---


### ApiGatewayUsagePlanApiStagesThrottleList <a name="ApiGatewayUsagePlanApiStagesThrottleList" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_usage_plan.ApiGatewayUsagePlanApiStagesThrottleList;

new ApiGatewayUsagePlanApiStagesThrottleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.get"></a>

```java
public ApiGatewayUsagePlanApiStagesThrottleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a>>

---


### ApiGatewayUsagePlanApiStagesThrottleOutputReference <a name="ApiGatewayUsagePlanApiStagesThrottleOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_usage_plan.ApiGatewayUsagePlanApiStagesThrottleOutputReference;

new ApiGatewayUsagePlanApiStagesThrottleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit">resetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit">resetRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBurstLimit` <a name="resetBurstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit"></a>

```java
public void resetBurstLimit()
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit"></a>

```java
public void resetRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput">burstLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit">burstLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `burstLimitInput`<sup>Optional</sup> <a name="burstLimitInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput"></a>

```java
public java.lang.Number getBurstLimitInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput"></a>

```java
public java.lang.Number getRateLimitInput();
```

- *Type:* java.lang.Number

---

##### `burstLimit`<sup>Required</sup> <a name="burstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit"></a>

```java
public java.lang.Number getBurstLimit();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanApiStagesThrottle">ApiGatewayUsagePlanApiStagesThrottle</a> OR com.hashicorp.cdktf.IResolvable

---


### ApiGatewayUsagePlanQuotaSettingsOutputReference <a name="ApiGatewayUsagePlanQuotaSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_usage_plan.ApiGatewayUsagePlanQuotaSettingsOutputReference;

new ApiGatewayUsagePlanQuotaSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resetOffset">resetOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.resetOffset"></a>

```java
public void resetOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limitInput">limitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offsetInput">offsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offset">offset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limitInput"></a>

```java
public java.lang.Number getLimitInput();
```

- *Type:* java.lang.Number

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offsetInput"></a>

```java
public java.lang.Number getOffsetInput();
```

- *Type:* java.lang.Number

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.offset"></a>

```java
public java.lang.Number getOffset();
```

- *Type:* java.lang.Number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettingsOutputReference.property.internalValue"></a>

```java
public ApiGatewayUsagePlanQuotaSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanQuotaSettings">ApiGatewayUsagePlanQuotaSettings</a>

---


### ApiGatewayUsagePlanThrottleSettingsOutputReference <a name="ApiGatewayUsagePlanThrottleSettingsOutputReference" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_usage_plan.ApiGatewayUsagePlanThrottleSettingsOutputReference;

new ApiGatewayUsagePlanThrottleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetBurstLimit">resetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetRateLimit">resetRateLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBurstLimit` <a name="resetBurstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetBurstLimit"></a>

```java
public void resetBurstLimit()
```

##### `resetRateLimit` <a name="resetRateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.resetRateLimit"></a>

```java
public void resetRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimitInput">burstLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimit">burstLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `burstLimitInput`<sup>Optional</sup> <a name="burstLimitInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimitInput"></a>

```java
public java.lang.Number getBurstLimitInput();
```

- *Type:* java.lang.Number

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimitInput"></a>

```java
public java.lang.Number getRateLimitInput();
```

- *Type:* java.lang.Number

---

##### `burstLimit`<sup>Required</sup> <a name="burstLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.burstLimit"></a>

```java
public java.lang.Number getBurstLimit();
```

- *Type:* java.lang.Number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettingsOutputReference.property.internalValue"></a>

```java
public ApiGatewayUsagePlanThrottleSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayUsagePlan.ApiGatewayUsagePlanThrottleSettings">ApiGatewayUsagePlanThrottleSettings</a>

---



