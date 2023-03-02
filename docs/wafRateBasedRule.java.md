# `wafRateBasedRule` Submodule <a name="`wafRateBasedRule` Submodule" id="@cdktf/provider-aws.wafRateBasedRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafRateBasedRule <a name="WafRateBasedRule" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule aws_waf_rate_based_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_rate_based_rule.WafRateBasedRule;

WafRateBasedRule.Builder.create(Construct scope, java.lang.String id)
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
    .metricName(java.lang.String)
    .name(java.lang.String)
    .rateKey(java.lang.String)
    .rateLimit(java.lang.Number)
//  .id(java.lang.String)
//  .predicates(IResolvable)
//  .predicates(java.util.List<WafRateBasedRulePredicates>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#metric_name WafRateBasedRule#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#name WafRateBasedRule#name}. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.rateKey">rateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#rate_key WafRateBasedRule#rate_key}. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#rate_limit WafRateBasedRule#rate_limit}. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#id WafRateBasedRule#id}. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.predicates">predicates</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>></code> | predicates block. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#tags WafRateBasedRule#tags}. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#tags_all WafRateBasedRule#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.metricName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#metric_name WafRateBasedRule#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#name WafRateBasedRule#name}.

---

##### `rateKey`<sup>Required</sup> <a name="rateKey" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.rateKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#rate_key WafRateBasedRule#rate_key}.

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.rateLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#rate_limit WafRateBasedRule#rate_limit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#id WafRateBasedRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `predicates`<sup>Optional</sup> <a name="predicates" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.predicates"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>>

predicates block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#predicates WafRateBasedRule#predicates}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#tags WafRateBasedRule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#tags_all WafRateBasedRule#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.putPredicates">putPredicates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.resetPredicates">resetPredicates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPredicates` <a name="putPredicates" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.putPredicates"></a>

```java
public void putPredicates(IResolvable OR java.util.List<WafRateBasedRulePredicates> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.putPredicates.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.resetId"></a>

```java
public void resetId()
```

##### `resetPredicates` <a name="resetPredicates" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.resetPredicates"></a>

```java
public void resetPredicates()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_rate_based_rule.WafRateBasedRule;

WafRateBasedRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_rate_based_rule.WafRateBasedRule;

WafRateBasedRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_rate_based_rule.WafRateBasedRule;

WafRateBasedRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.predicates">predicates</a></code> | <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList">WafRateBasedRulePredicatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.predicatesInput">predicatesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateKeyInput">rateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateLimitInput">rateLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateKey">rateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `predicates`<sup>Required</sup> <a name="predicates" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.predicates"></a>

```java
public WafRateBasedRulePredicatesList getPredicates();
```

- *Type:* <a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList">WafRateBasedRulePredicatesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `predicatesInput`<sup>Optional</sup> <a name="predicatesInput" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.predicatesInput"></a>

```java
public java.lang.Object getPredicatesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>>

---

##### `rateKeyInput`<sup>Optional</sup> <a name="rateKeyInput" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateKeyInput"></a>

```java
public java.lang.String getRateKeyInput();
```

- *Type:* java.lang.String

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateLimitInput"></a>

```java
public java.lang.Number getRateLimitInput();
```

- *Type:* java.lang.Number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rateKey`<sup>Required</sup> <a name="rateKey" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateKey"></a>

```java
public java.lang.String getRateKey();
```

- *Type:* java.lang.String

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WafRateBasedRuleConfig <a name="WafRateBasedRuleConfig" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_rate_based_rule.WafRateBasedRuleConfig;

WafRateBasedRuleConfig.builder()
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
    .metricName(java.lang.String)
    .name(java.lang.String)
    .rateKey(java.lang.String)
    .rateLimit(java.lang.Number)
//  .id(java.lang.String)
//  .predicates(IResolvable)
//  .predicates(java.util.List<WafRateBasedRulePredicates>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#metric_name WafRateBasedRule#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#name WafRateBasedRule#name}. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.rateKey">rateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#rate_key WafRateBasedRule#rate_key}. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#rate_limit WafRateBasedRule#rate_limit}. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#id WafRateBasedRule#id}. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.predicates">predicates</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>></code> | predicates block. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#tags WafRateBasedRule#tags}. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#tags_all WafRateBasedRule#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#metric_name WafRateBasedRule#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#name WafRateBasedRule#name}.

---

##### `rateKey`<sup>Required</sup> <a name="rateKey" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.rateKey"></a>

```java
public java.lang.String getRateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#rate_key WafRateBasedRule#rate_key}.

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#rate_limit WafRateBasedRule#rate_limit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#id WafRateBasedRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `predicates`<sup>Optional</sup> <a name="predicates" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.predicates"></a>

```java
public java.lang.Object getPredicates();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>>

predicates block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#predicates WafRateBasedRule#predicates}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#tags WafRateBasedRule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRuleConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#tags_all WafRateBasedRule#tags_all}.

---

### WafRateBasedRulePredicates <a name="WafRateBasedRulePredicates" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_rate_based_rule.WafRateBasedRulePredicates;

WafRateBasedRulePredicates.builder()
    .dataId(java.lang.String)
    .negated(java.lang.Boolean)
    .negated(IResolvable)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates.property.dataId">dataId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#data_id WafRateBasedRule#data_id}. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates.property.negated">negated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#negated WafRateBasedRule#negated}. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#type WafRateBasedRule#type}. |

---

##### `dataId`<sup>Required</sup> <a name="dataId" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates.property.dataId"></a>

```java
public java.lang.String getDataId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#data_id WafRateBasedRule#data_id}.

---

##### `negated`<sup>Required</sup> <a name="negated" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates.property.negated"></a>

```java
public java.lang.Object getNegated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#negated WafRateBasedRule#negated}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_rate_based_rule#type WafRateBasedRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafRateBasedRulePredicatesList <a name="WafRateBasedRulePredicatesList" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_rate_based_rule.WafRateBasedRulePredicatesList;

new WafRateBasedRulePredicatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.get"></a>

```java
public WafRateBasedRulePredicatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>>

---


### WafRateBasedRulePredicatesOutputReference <a name="WafRateBasedRulePredicatesOutputReference" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.waf_rate_based_rule.WafRateBasedRulePredicatesOutputReference;

new WafRateBasedRulePredicatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.dataIdInput">dataIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.negatedInput">negatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.dataId">dataId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.negated">negated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataIdInput`<sup>Optional</sup> <a name="dataIdInput" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.dataIdInput"></a>

```java
public java.lang.String getDataIdInput();
```

- *Type:* java.lang.String

---

##### `negatedInput`<sup>Optional</sup> <a name="negatedInput" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.negatedInput"></a>

```java
public java.lang.Object getNegatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `dataId`<sup>Required</sup> <a name="dataId" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.dataId"></a>

```java
public java.lang.String getDataId();
```

- *Type:* java.lang.String

---

##### `negated`<sup>Required</sup> <a name="negated" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.negated"></a>

```java
public java.lang.Object getNegated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a> OR com.hashicorp.cdktf.IResolvable

---



