# `wafregionalRateBasedRule` Submodule <a name="`wafregionalRateBasedRule` Submodule" id="@cdktf/provider-aws.wafregionalRateBasedRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalRateBasedRule <a name="WafregionalRateBasedRule" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule aws_wafregional_rate_based_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_rate_based_rule.WafregionalRateBasedRule;

WafregionalRateBasedRule.Builder.create(Construct scope, java.lang.String id)
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
//  .predicate(IResolvable)
//  .predicate(java.util.List<WafregionalRateBasedRulePredicate>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#metric_name WafregionalRateBasedRule#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#name WafregionalRateBasedRule#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.rateKey">rateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_key WafregionalRateBasedRule#rate_key}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_limit WafregionalRateBasedRule#rate_limit}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#id WafregionalRateBasedRule#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.predicate">predicate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>></code> | predicate block. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags WafregionalRateBasedRule#tags}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags_all WafregionalRateBasedRule#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.metricName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#metric_name WafregionalRateBasedRule#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#name WafregionalRateBasedRule#name}.

---

##### `rateKey`<sup>Required</sup> <a name="rateKey" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.rateKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_key WafregionalRateBasedRule#rate_key}.

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.rateLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_limit WafregionalRateBasedRule#rate_limit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#id WafregionalRateBasedRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.predicate"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>>

predicate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#predicate WafregionalRateBasedRule#predicate}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags WafregionalRateBasedRule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags_all WafregionalRateBasedRule#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetPredicate">resetPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPredicate` <a name="putPredicate" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.putPredicate"></a>

```java
public void putPredicate(IResolvable OR java.util.List<WafregionalRateBasedRulePredicate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.putPredicate.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetId"></a>

```java
public void resetId()
```

##### `resetPredicate` <a name="resetPredicate" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetPredicate"></a>

```java
public void resetPredicate()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_rate_based_rule.WafregionalRateBasedRule;

WafregionalRateBasedRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_rate_based_rule.WafregionalRateBasedRule;

WafregionalRateBasedRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_rate_based_rule.WafregionalRateBasedRule;

WafregionalRateBasedRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.predicate">predicate</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList">WafregionalRateBasedRulePredicateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.metricNameInput">metricNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.predicateInput">predicateInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateKeyInput">rateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateLimitInput">rateLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.metricName">metricName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateKey">rateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.predicate"></a>

```java
public WafregionalRateBasedRulePredicateList getPredicate();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList">WafregionalRateBasedRulePredicateList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.metricNameInput"></a>

```java
public java.lang.String getMetricNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.predicateInput"></a>

```java
public java.lang.Object getPredicateInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>>

---

##### `rateKeyInput`<sup>Optional</sup> <a name="rateKeyInput" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateKeyInput"></a>

```java
public java.lang.String getRateKeyInput();
```

- *Type:* java.lang.String

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateLimitInput"></a>

```java
public java.lang.Number getRateLimitInput();
```

- *Type:* java.lang.Number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rateKey`<sup>Required</sup> <a name="rateKey" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateKey"></a>

```java
public java.lang.String getRateKey();
```

- *Type:* java.lang.String

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalRateBasedRuleConfig <a name="WafregionalRateBasedRuleConfig" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_rate_based_rule.WafregionalRateBasedRuleConfig;

WafregionalRateBasedRuleConfig.builder()
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
//  .predicate(IResolvable)
//  .predicate(java.util.List<WafregionalRateBasedRulePredicate>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.metricName">metricName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#metric_name WafregionalRateBasedRule#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#name WafregionalRateBasedRule#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.rateKey">rateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_key WafregionalRateBasedRule#rate_key}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.rateLimit">rateLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_limit WafregionalRateBasedRule#rate_limit}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#id WafregionalRateBasedRule#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.predicate">predicate</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>></code> | predicate block. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags WafregionalRateBasedRule#tags}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags_all WafregionalRateBasedRule#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.metricName"></a>

```java
public java.lang.String getMetricName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#metric_name WafregionalRateBasedRule#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#name WafregionalRateBasedRule#name}.

---

##### `rateKey`<sup>Required</sup> <a name="rateKey" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.rateKey"></a>

```java
public java.lang.String getRateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_key WafregionalRateBasedRule#rate_key}.

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.rateLimit"></a>

```java
public java.lang.Number getRateLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#rate_limit WafregionalRateBasedRule#rate_limit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#id WafregionalRateBasedRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.predicate"></a>

```java
public java.lang.Object getPredicate();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>>

predicate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#predicate WafregionalRateBasedRule#predicate}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags WafregionalRateBasedRule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRuleConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#tags_all WafregionalRateBasedRule#tags_all}.

---

### WafregionalRateBasedRulePredicate <a name="WafregionalRateBasedRulePredicate" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_rate_based_rule.WafregionalRateBasedRulePredicate;

WafregionalRateBasedRulePredicate.builder()
    .dataId(java.lang.String)
    .negated(java.lang.Boolean)
    .negated(IResolvable)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate.property.dataId">dataId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#data_id WafregionalRateBasedRule#data_id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate.property.negated">negated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#negated WafregionalRateBasedRule#negated}. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#type WafregionalRateBasedRule#type}. |

---

##### `dataId`<sup>Required</sup> <a name="dataId" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate.property.dataId"></a>

```java
public java.lang.String getDataId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#data_id WafregionalRateBasedRule#data_id}.

---

##### `negated`<sup>Required</sup> <a name="negated" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate.property.negated"></a>

```java
public java.lang.Object getNegated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#negated WafregionalRateBasedRule#negated}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule#type WafregionalRateBasedRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalRateBasedRulePredicateList <a name="WafregionalRateBasedRulePredicateList" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_rate_based_rule.WafregionalRateBasedRulePredicateList;

new WafregionalRateBasedRulePredicateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.get"></a>

```java
public WafregionalRateBasedRulePredicateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a>>

---


### WafregionalRateBasedRulePredicateOutputReference <a name="WafregionalRateBasedRulePredicateOutputReference" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafregional_rate_based_rule.WafregionalRateBasedRulePredicateOutputReference;

new WafregionalRateBasedRulePredicateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.dataIdInput">dataIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.negatedInput">negatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.dataId">dataId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.negated">negated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataIdInput`<sup>Optional</sup> <a name="dataIdInput" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.dataIdInput"></a>

```java
public java.lang.String getDataIdInput();
```

- *Type:* java.lang.String

---

##### `negatedInput`<sup>Optional</sup> <a name="negatedInput" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.negatedInput"></a>

```java
public java.lang.Object getNegatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `dataId`<sup>Required</sup> <a name="dataId" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.dataId"></a>

```java
public java.lang.String getDataId();
```

- *Type:* java.lang.String

---

##### `negated`<sup>Required</sup> <a name="negated" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.negated"></a>

```java
public java.lang.Object getNegated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicateOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalRateBasedRule.WafregionalRateBasedRulePredicate">WafregionalRateBasedRulePredicate</a> OR com.hashicorp.cdktf.IResolvable

---



