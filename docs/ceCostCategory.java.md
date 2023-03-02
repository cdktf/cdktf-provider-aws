# `ceCostCategory` Submodule <a name="`ceCostCategory` Submodule" id="@cdktf/provider-aws.ceCostCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CeCostCategory <a name="CeCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category aws_ce_cost_category}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategory;

CeCostCategory.Builder.create(Construct scope, java.lang.String id)
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
    .rule(IResolvable)
    .rule(java.util.List<CeCostCategoryRule>)
    .ruleVersion(java.lang.String)
//  .defaultValue(java.lang.String)
//  .effectiveStart(java.lang.String)
//  .id(java.lang.String)
//  .splitChargeRule(IResolvable)
//  .splitChargeRule(java.util.List<CeCostCategorySplitChargeRule>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#name CeCostCategory#name}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.ruleVersion">ruleVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule_version CeCostCategory#rule_version}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#default_value CeCostCategory#default_value}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.effectiveStart">effectiveStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#effective_start CeCostCategory#effective_start}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#id CeCostCategory#id}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.splitChargeRule">splitChargeRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>></code> | split_charge_rule block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags_all CeCostCategory#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#name CeCostCategory#name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.rule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule CeCostCategory#rule}

---

##### `ruleVersion`<sup>Required</sup> <a name="ruleVersion" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.ruleVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule_version CeCostCategory#rule_version}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.defaultValue"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#default_value CeCostCategory#default_value}.

---

##### `effectiveStart`<sup>Optional</sup> <a name="effectiveStart" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.effectiveStart"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#effective_start CeCostCategory#effective_start}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#id CeCostCategory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `splitChargeRule`<sup>Optional</sup> <a name="splitChargeRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.splitChargeRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>>

split_charge_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#split_charge_rule CeCostCategory#split_charge_rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags_all CeCostCategory#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.putSplitChargeRule">putSplitChargeRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetEffectiveStart">resetEffectiveStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetSplitChargeRule">resetSplitChargeRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<CeCostCategoryRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>>

---

##### `putSplitChargeRule` <a name="putSplitChargeRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.putSplitChargeRule"></a>

```java
public void putSplitChargeRule(IResolvable OR java.util.List<CeCostCategorySplitChargeRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.putSplitChargeRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>>

---

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetDefaultValue"></a>

```java
public void resetDefaultValue()
```

##### `resetEffectiveStart` <a name="resetEffectiveStart" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetEffectiveStart"></a>

```java
public void resetEffectiveStart()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetId"></a>

```java
public void resetId()
```

##### `resetSplitChargeRule` <a name="resetSplitChargeRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetSplitChargeRule"></a>

```java
public void resetSplitChargeRule()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategory;

CeCostCategory.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategory;

CeCostCategory.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategory;

CeCostCategory.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveEnd">effectiveEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList">CeCostCategoryRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.splitChargeRule">splitChargeRule</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList">CeCostCategorySplitChargeRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.defaultValueInput">defaultValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveStartInput">effectiveStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleVersionInput">ruleVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.splitChargeRuleInput">splitChargeRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveStart">effectiveStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleVersion">ruleVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `effectiveEnd`<sup>Required</sup> <a name="effectiveEnd" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveEnd"></a>

```java
public java.lang.String getEffectiveEnd();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.rule"></a>

```java
public CeCostCategoryRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList">CeCostCategoryRuleList</a>

---

##### `splitChargeRule`<sup>Required</sup> <a name="splitChargeRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.splitChargeRule"></a>

```java
public CeCostCategorySplitChargeRuleList getSplitChargeRule();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList">CeCostCategorySplitChargeRuleList</a>

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.defaultValueInput"></a>

```java
public java.lang.String getDefaultValueInput();
```

- *Type:* java.lang.String

---

##### `effectiveStartInput`<sup>Optional</sup> <a name="effectiveStartInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveStartInput"></a>

```java
public java.lang.String getEffectiveStartInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>>

---

##### `ruleVersionInput`<sup>Optional</sup> <a name="ruleVersionInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleVersionInput"></a>

```java
public java.lang.String getRuleVersionInput();
```

- *Type:* java.lang.String

---

##### `splitChargeRuleInput`<sup>Optional</sup> <a name="splitChargeRuleInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.splitChargeRuleInput"></a>

```java
public java.lang.Object getSplitChargeRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

---

##### `effectiveStart`<sup>Required</sup> <a name="effectiveStart" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.effectiveStart"></a>

```java
public java.lang.String getEffectiveStart();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ruleVersion`<sup>Required</sup> <a name="ruleVersion" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.ruleVersion"></a>

```java
public java.lang.String getRuleVersion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ceCostCategory.CeCostCategory.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CeCostCategoryConfig <a name="CeCostCategoryConfig" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryConfig;

CeCostCategoryConfig.builder()
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
    .rule(IResolvable)
    .rule(java.util.List<CeCostCategoryRule>)
    .ruleVersion(java.lang.String)
//  .defaultValue(java.lang.String)
//  .effectiveStart(java.lang.String)
//  .id(java.lang.String)
//  .splitChargeRule(IResolvable)
//  .splitChargeRule(java.util.List<CeCostCategorySplitChargeRule>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#name CeCostCategory#name}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.ruleVersion">ruleVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule_version CeCostCategory#rule_version}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.defaultValue">defaultValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#default_value CeCostCategory#default_value}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.effectiveStart">effectiveStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#effective_start CeCostCategory#effective_start}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#id CeCostCategory#id}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.splitChargeRule">splitChargeRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>></code> | split_charge_rule block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags_all CeCostCategory#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#name CeCostCategory#name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule CeCostCategory#rule}

---

##### `ruleVersion`<sup>Required</sup> <a name="ruleVersion" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.ruleVersion"></a>

```java
public java.lang.String getRuleVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule_version CeCostCategory#rule_version}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.defaultValue"></a>

```java
public java.lang.String getDefaultValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#default_value CeCostCategory#default_value}.

---

##### `effectiveStart`<sup>Optional</sup> <a name="effectiveStart" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.effectiveStart"></a>

```java
public java.lang.String getEffectiveStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#effective_start CeCostCategory#effective_start}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#id CeCostCategory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `splitChargeRule`<sup>Optional</sup> <a name="splitChargeRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.splitChargeRule"></a>

```java
public java.lang.Object getSplitChargeRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>>

split_charge_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#split_charge_rule CeCostCategory#split_charge_rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags_all CeCostCategory#tags_all}.

---

### CeCostCategoryRule <a name="CeCostCategoryRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRule;

CeCostCategoryRule.builder()
//  .inheritedValue(CeCostCategoryRuleInheritedValue)
//  .rule(CeCostCategoryRuleRule)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.inheritedValue">inheritedValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a></code> | inherited_value block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a></code> | rule block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#type CeCostCategory#type}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#value CeCostCategory#value}. |

---

##### `inheritedValue`<sup>Optional</sup> <a name="inheritedValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.inheritedValue"></a>

```java
public CeCostCategoryRuleInheritedValue getInheritedValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a>

inherited_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#inherited_value CeCostCategory#inherited_value}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.rule"></a>

```java
public CeCostCategoryRuleRule getRule();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#rule CeCostCategory#rule}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#type CeCostCategory#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#value CeCostCategory#value}.

---

### CeCostCategoryRuleInheritedValue <a name="CeCostCategoryRuleInheritedValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleInheritedValue;

CeCostCategoryRuleInheritedValue.builder()
//  .dimensionKey(java.lang.String)
//  .dimensionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue.property.dimensionKey">dimensionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension_key CeCostCategory#dimension_key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue.property.dimensionName">dimensionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension_name CeCostCategory#dimension_name}. |

---

##### `dimensionKey`<sup>Optional</sup> <a name="dimensionKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue.property.dimensionKey"></a>

```java
public java.lang.String getDimensionKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension_key CeCostCategory#dimension_key}.

---

##### `dimensionName`<sup>Optional</sup> <a name="dimensionName" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue.property.dimensionName"></a>

```java
public java.lang.String getDimensionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension_name CeCostCategory#dimension_name}.

---

### CeCostCategoryRuleRule <a name="CeCostCategoryRuleRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRule;

CeCostCategoryRuleRule.builder()
//  .and(IResolvable)
//  .and(java.util.List<CeCostCategoryRuleRuleAnd>)
//  .costCategory(CeCostCategoryRuleRuleCostCategory)
//  .dimension(CeCostCategoryRuleRuleDimension)
//  .not(CeCostCategoryRuleRuleNot)
//  .or(IResolvable)
//  .or(java.util.List<CeCostCategoryRuleRuleOr>)
//  .tags(CeCostCategoryRuleRuleTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.and">and</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>></code> | and block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.or">or</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>></code> | or block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a></code> | tags block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.and"></a>

```java
public java.lang.Object getAnd();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>>

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#and CeCostCategory#and}

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.costCategory"></a>

```java
public CeCostCategoryRuleRuleCostCategory getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#cost_category CeCostCategory#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.dimension"></a>

```java
public CeCostCategoryRuleRuleDimension getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension CeCostCategory#dimension}

---

##### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.not"></a>

```java
public CeCostCategoryRuleRuleNot getNot();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a>

not block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#not CeCostCategory#not}

---

##### `or`<sup>Optional</sup> <a name="or" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.or"></a>

```java
public java.lang.Object getOr();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>>

or block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#or CeCostCategory#or}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule.property.tags"></a>

```java
public CeCostCategoryRuleRuleTags getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}

---

### CeCostCategoryRuleRuleAnd <a name="CeCostCategoryRuleRuleAnd" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleAnd;

CeCostCategoryRuleRuleAnd.builder()
//  .costCategory(CeCostCategoryRuleRuleAndCostCategory)
//  .dimension(CeCostCategoryRuleRuleAndDimension)
//  .tags(CeCostCategoryRuleRuleAndTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.costCategory"></a>

```java
public CeCostCategoryRuleRuleAndCostCategory getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#cost_category CeCostCategory#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.dimension"></a>

```java
public CeCostCategoryRuleRuleAndDimension getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension CeCostCategory#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd.property.tags"></a>

```java
public CeCostCategoryRuleRuleAndTags getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}

---

### CeCostCategoryRuleRuleAndCostCategory <a name="CeCostCategoryRuleRuleAndCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleAndCostCategory;

CeCostCategoryRuleRuleAndCostCategory.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleAndDimension <a name="CeCostCategoryRuleRuleAndDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleAndDimension;

CeCostCategoryRuleRuleAndDimension.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleAndTags <a name="CeCostCategoryRuleRuleAndTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleAndTags;

CeCostCategoryRuleRuleAndTags.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleCostCategory <a name="CeCostCategoryRuleRuleCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleCostCategory;

CeCostCategoryRuleRuleCostCategory.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleDimension <a name="CeCostCategoryRuleRuleDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleDimension;

CeCostCategoryRuleRuleDimension.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleNot <a name="CeCostCategoryRuleRuleNot" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleNot;

CeCostCategoryRuleRuleNot.builder()
//  .costCategory(CeCostCategoryRuleRuleNotCostCategory)
//  .dimension(CeCostCategoryRuleRuleNotDimension)
//  .tags(CeCostCategoryRuleRuleNotTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.costCategory"></a>

```java
public CeCostCategoryRuleRuleNotCostCategory getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#cost_category CeCostCategory#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.dimension"></a>

```java
public CeCostCategoryRuleRuleNotDimension getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension CeCostCategory#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot.property.tags"></a>

```java
public CeCostCategoryRuleRuleNotTags getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}

---

### CeCostCategoryRuleRuleNotCostCategory <a name="CeCostCategoryRuleRuleNotCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleNotCostCategory;

CeCostCategoryRuleRuleNotCostCategory.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleNotDimension <a name="CeCostCategoryRuleRuleNotDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleNotDimension;

CeCostCategoryRuleRuleNotDimension.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleNotTags <a name="CeCostCategoryRuleRuleNotTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleNotTags;

CeCostCategoryRuleRuleNotTags.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleOr <a name="CeCostCategoryRuleRuleOr" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleOr;

CeCostCategoryRuleRuleOr.builder()
//  .costCategory(CeCostCategoryRuleRuleOrCostCategory)
//  .dimension(CeCostCategoryRuleRuleOrDimension)
//  .tags(CeCostCategoryRuleRuleOrTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a></code> | tags block. |

---

##### `costCategory`<sup>Optional</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.costCategory"></a>

```java
public CeCostCategoryRuleRuleOrCostCategory getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#cost_category CeCostCategory#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.dimension"></a>

```java
public CeCostCategoryRuleRuleOrDimension getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#dimension CeCostCategory#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr.property.tags"></a>

```java
public CeCostCategoryRuleRuleOrTags getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#tags CeCostCategory#tags}

---

### CeCostCategoryRuleRuleOrCostCategory <a name="CeCostCategoryRuleRuleOrCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleOrCostCategory;

CeCostCategoryRuleRuleOrCostCategory.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleOrDimension <a name="CeCostCategoryRuleRuleOrDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleOrDimension;

CeCostCategoryRuleRuleOrDimension.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleOrTags <a name="CeCostCategoryRuleRuleOrTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleOrTags;

CeCostCategoryRuleRuleOrTags.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategoryRuleRuleTags <a name="CeCostCategoryRuleRuleTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleTags;

CeCostCategoryRuleRuleTags.builder()
//  .key(java.lang.String)
//  .matchOptions(java.util.List<java.lang.String>)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#key CeCostCategory#key}.

---

##### `matchOptions`<sup>Optional</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#match_options CeCostCategory#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

### CeCostCategorySplitChargeRule <a name="CeCostCategorySplitChargeRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategorySplitChargeRule;

CeCostCategorySplitChargeRule.builder()
    .method(java.lang.String)
    .source(java.lang.String)
    .targets(java.util.List<java.lang.String>)
//  .parameter(IResolvable)
//  .parameter(java.util.List<CeCostCategorySplitChargeRuleParameter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.method">method</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#method CeCostCategory#method}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#source CeCostCategory#source}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#targets CeCostCategory#targets}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.parameter">parameter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>></code> | parameter block. |

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#method CeCostCategory#method}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#source CeCostCategory#source}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#targets CeCostCategory#targets}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule.property.parameter"></a>

```java
public java.lang.Object getParameter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>>

parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#parameter CeCostCategory#parameter}

---

### CeCostCategorySplitChargeRuleParameter <a name="CeCostCategorySplitChargeRuleParameter" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategorySplitChargeRuleParameter;

CeCostCategorySplitChargeRuleParameter.builder()
//  .type(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#type CeCostCategory#type}. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#type CeCostCategory#type}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_cost_category#values CeCostCategory#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### CeCostCategoryRuleInheritedValueOutputReference <a name="CeCostCategoryRuleInheritedValueOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleInheritedValueOutputReference;

new CeCostCategoryRuleInheritedValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resetDimensionKey">resetDimensionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resetDimensionName">resetDimensionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensionKey` <a name="resetDimensionKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resetDimensionKey"></a>

```java
public void resetDimensionKey()
```

##### `resetDimensionName` <a name="resetDimensionName" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.resetDimensionName"></a>

```java
public void resetDimensionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionKeyInput">dimensionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionNameInput">dimensionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionKey">dimensionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionName">dimensionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensionKeyInput`<sup>Optional</sup> <a name="dimensionKeyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionKeyInput"></a>

```java
public java.lang.String getDimensionKeyInput();
```

- *Type:* java.lang.String

---

##### `dimensionNameInput`<sup>Optional</sup> <a name="dimensionNameInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionNameInput"></a>

```java
public java.lang.String getDimensionNameInput();
```

- *Type:* java.lang.String

---

##### `dimensionKey`<sup>Required</sup> <a name="dimensionKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionKey"></a>

```java
public java.lang.String getDimensionKey();
```

- *Type:* java.lang.String

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.dimensionName"></a>

```java
public java.lang.String getDimensionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference.property.internalValue"></a>

```java
public CeCostCategoryRuleInheritedValue getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a>

---


### CeCostCategoryRuleList <a name="CeCostCategoryRuleList" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleList;

new CeCostCategoryRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.get"></a>

```java
public CeCostCategoryRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a>>

---


### CeCostCategoryRuleOutputReference <a name="CeCostCategoryRuleOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleOutputReference;

new CeCostCategoryRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putInheritedValue">putInheritedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetInheritedValue">resetInheritedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInheritedValue` <a name="putInheritedValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putInheritedValue"></a>

```java
public void putInheritedValue(CeCostCategoryRuleInheritedValue value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putInheritedValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putRule"></a>

```java
public void putRule(CeCostCategoryRuleRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a>

---

##### `resetInheritedValue` <a name="resetInheritedValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetInheritedValue"></a>

```java
public void resetInheritedValue()
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetRule"></a>

```java
public void resetRule()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.inheritedValue">inheritedValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference">CeCostCategoryRuleInheritedValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference">CeCostCategoryRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.inheritedValueInput">inheritedValueInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.ruleInput">ruleInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inheritedValue`<sup>Required</sup> <a name="inheritedValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.inheritedValue"></a>

```java
public CeCostCategoryRuleInheritedValueOutputReference getInheritedValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValueOutputReference">CeCostCategoryRuleInheritedValueOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.rule"></a>

```java
public CeCostCategoryRuleRuleOutputReference getRule();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference">CeCostCategoryRuleRuleOutputReference</a>

---

##### `inheritedValueInput`<sup>Optional</sup> <a name="inheritedValueInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.inheritedValueInput"></a>

```java
public CeCostCategoryRuleInheritedValue getInheritedValueInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleInheritedValue">CeCostCategoryRuleInheritedValue</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.ruleInput"></a>

```java
public CeCostCategoryRuleRule getRuleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRule">CeCostCategoryRule</a> OR com.hashicorp.cdktf.IResolvable

---


### CeCostCategoryRuleRuleAndCostCategoryOutputReference <a name="CeCostCategoryRuleRuleAndCostCategoryOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleAndCostCategoryOutputReference;

new CeCostCategoryRuleRuleAndCostCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference.property.internalValue"></a>

```java
public CeCostCategoryRuleRuleAndCostCategory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a>

---


### CeCostCategoryRuleRuleAndDimensionOutputReference <a name="CeCostCategoryRuleRuleAndDimensionOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleAndDimensionOutputReference;

new CeCostCategoryRuleRuleAndDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference.property.internalValue"></a>

```java
public CeCostCategoryRuleRuleAndDimension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a>

---


### CeCostCategoryRuleRuleAndList <a name="CeCostCategoryRuleRuleAndList" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleAndList;

new CeCostCategoryRuleRuleAndList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.get"></a>

```java
public CeCostCategoryRuleRuleAndOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>>

---


### CeCostCategoryRuleRuleAndOutputReference <a name="CeCostCategoryRuleRuleAndOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleAndOutputReference;

new CeCostCategoryRuleRuleAndOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putCostCategory"></a>

```java
public void putCostCategory(CeCostCategoryRuleRuleAndCostCategory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putDimension"></a>

```java
public void putDimension(CeCostCategoryRuleRuleAndDimension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putTags"></a>

```java
public void putTags(CeCostCategoryRuleRuleAndTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetCostCategory"></a>

```java
public void resetCostCategory()
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference">CeCostCategoryRuleRuleAndCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference">CeCostCategoryRuleRuleAndDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference">CeCostCategoryRuleRuleAndTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.costCategory"></a>

```java
public CeCostCategoryRuleRuleAndCostCategoryOutputReference getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategoryOutputReference">CeCostCategoryRuleRuleAndCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.dimension"></a>

```java
public CeCostCategoryRuleRuleAndDimensionOutputReference getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimensionOutputReference">CeCostCategoryRuleRuleAndDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.tags"></a>

```java
public CeCostCategoryRuleRuleAndTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference">CeCostCategoryRuleRuleAndTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.costCategoryInput"></a>

```java
public CeCostCategoryRuleRuleAndCostCategory getCostCategoryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndCostCategory">CeCostCategoryRuleRuleAndCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.dimensionInput"></a>

```java
public CeCostCategoryRuleRuleAndDimension getDimensionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndDimension">CeCostCategoryRuleRuleAndDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.tagsInput"></a>

```java
public CeCostCategoryRuleRuleAndTags getTagsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a> OR com.hashicorp.cdktf.IResolvable

---


### CeCostCategoryRuleRuleAndTagsOutputReference <a name="CeCostCategoryRuleRuleAndTagsOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleAndTagsOutputReference;

new CeCostCategoryRuleRuleAndTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTagsOutputReference.property.internalValue"></a>

```java
public CeCostCategoryRuleRuleAndTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndTags">CeCostCategoryRuleRuleAndTags</a>

---


### CeCostCategoryRuleRuleCostCategoryOutputReference <a name="CeCostCategoryRuleRuleCostCategoryOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleCostCategoryOutputReference;

new CeCostCategoryRuleRuleCostCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference.property.internalValue"></a>

```java
public CeCostCategoryRuleRuleCostCategory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a>

---


### CeCostCategoryRuleRuleDimensionOutputReference <a name="CeCostCategoryRuleRuleDimensionOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleDimensionOutputReference;

new CeCostCategoryRuleRuleDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference.property.internalValue"></a>

```java
public CeCostCategoryRuleRuleDimension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a>

---


### CeCostCategoryRuleRuleNotCostCategoryOutputReference <a name="CeCostCategoryRuleRuleNotCostCategoryOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleNotCostCategoryOutputReference;

new CeCostCategoryRuleRuleNotCostCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference.property.internalValue"></a>

```java
public CeCostCategoryRuleRuleNotCostCategory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a>

---


### CeCostCategoryRuleRuleNotDimensionOutputReference <a name="CeCostCategoryRuleRuleNotDimensionOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleNotDimensionOutputReference;

new CeCostCategoryRuleRuleNotDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference.property.internalValue"></a>

```java
public CeCostCategoryRuleRuleNotDimension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a>

---


### CeCostCategoryRuleRuleNotOutputReference <a name="CeCostCategoryRuleRuleNotOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleNotOutputReference;

new CeCostCategoryRuleRuleNotOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putCostCategory"></a>

```java
public void putCostCategory(CeCostCategoryRuleRuleNotCostCategory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putDimension"></a>

```java
public void putDimension(CeCostCategoryRuleRuleNotDimension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putTags"></a>

```java
public void putTags(CeCostCategoryRuleRuleNotTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetCostCategory"></a>

```java
public void resetCostCategory()
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference">CeCostCategoryRuleRuleNotCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference">CeCostCategoryRuleRuleNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference">CeCostCategoryRuleRuleNotTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.costCategory"></a>

```java
public CeCostCategoryRuleRuleNotCostCategoryOutputReference getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategoryOutputReference">CeCostCategoryRuleRuleNotCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.dimension"></a>

```java
public CeCostCategoryRuleRuleNotDimensionOutputReference getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimensionOutputReference">CeCostCategoryRuleRuleNotDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.tags"></a>

```java
public CeCostCategoryRuleRuleNotTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference">CeCostCategoryRuleRuleNotTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.costCategoryInput"></a>

```java
public CeCostCategoryRuleRuleNotCostCategory getCostCategoryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotCostCategory">CeCostCategoryRuleRuleNotCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.dimensionInput"></a>

```java
public CeCostCategoryRuleRuleNotDimension getDimensionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotDimension">CeCostCategoryRuleRuleNotDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.tagsInput"></a>

```java
public CeCostCategoryRuleRuleNotTags getTagsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference.property.internalValue"></a>

```java
public CeCostCategoryRuleRuleNot getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a>

---


### CeCostCategoryRuleRuleNotTagsOutputReference <a name="CeCostCategoryRuleRuleNotTagsOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleNotTagsOutputReference;

new CeCostCategoryRuleRuleNotTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTagsOutputReference.property.internalValue"></a>

```java
public CeCostCategoryRuleRuleNotTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotTags">CeCostCategoryRuleRuleNotTags</a>

---


### CeCostCategoryRuleRuleOrCostCategoryOutputReference <a name="CeCostCategoryRuleRuleOrCostCategoryOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleOrCostCategoryOutputReference;

new CeCostCategoryRuleRuleOrCostCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference.property.internalValue"></a>

```java
public CeCostCategoryRuleRuleOrCostCategory getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a>

---


### CeCostCategoryRuleRuleOrDimensionOutputReference <a name="CeCostCategoryRuleRuleOrDimensionOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleOrDimensionOutputReference;

new CeCostCategoryRuleRuleOrDimensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference.property.internalValue"></a>

```java
public CeCostCategoryRuleRuleOrDimension getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a>

---


### CeCostCategoryRuleRuleOrList <a name="CeCostCategoryRuleRuleOrList" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleOrList;

new CeCostCategoryRuleRuleOrList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.get"></a>

```java
public CeCostCategoryRuleRuleOrOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>>

---


### CeCostCategoryRuleRuleOrOutputReference <a name="CeCostCategoryRuleRuleOrOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleOrOutputReference;

new CeCostCategoryRuleRuleOrOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putCostCategory"></a>

```java
public void putCostCategory(CeCostCategoryRuleRuleOrCostCategory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putDimension"></a>

```java
public void putDimension(CeCostCategoryRuleRuleOrDimension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putTags"></a>

```java
public void putTags(CeCostCategoryRuleRuleOrTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a>

---

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetCostCategory"></a>

```java
public void resetCostCategory()
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference">CeCostCategoryRuleRuleOrCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference">CeCostCategoryRuleRuleOrDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference">CeCostCategoryRuleRuleOrTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.costCategory"></a>

```java
public CeCostCategoryRuleRuleOrCostCategoryOutputReference getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategoryOutputReference">CeCostCategoryRuleRuleOrCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.dimension"></a>

```java
public CeCostCategoryRuleRuleOrDimensionOutputReference getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimensionOutputReference">CeCostCategoryRuleRuleOrDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.tags"></a>

```java
public CeCostCategoryRuleRuleOrTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference">CeCostCategoryRuleRuleOrTagsOutputReference</a>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.costCategoryInput"></a>

```java
public CeCostCategoryRuleRuleOrCostCategory getCostCategoryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrCostCategory">CeCostCategoryRuleRuleOrCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.dimensionInput"></a>

```java
public CeCostCategoryRuleRuleOrDimension getDimensionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrDimension">CeCostCategoryRuleRuleOrDimension</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.tagsInput"></a>

```java
public CeCostCategoryRuleRuleOrTags getTagsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a> OR com.hashicorp.cdktf.IResolvable

---


### CeCostCategoryRuleRuleOrTagsOutputReference <a name="CeCostCategoryRuleRuleOrTagsOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleOrTagsOutputReference;

new CeCostCategoryRuleRuleOrTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTagsOutputReference.property.internalValue"></a>

```java
public CeCostCategoryRuleRuleOrTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrTags">CeCostCategoryRuleRuleOrTags</a>

---


### CeCostCategoryRuleRuleOutputReference <a name="CeCostCategoryRuleRuleOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleOutputReference;

new CeCostCategoryRuleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putCostCategory">putCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putDimension">putDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putNot">putNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putOr">putOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetAnd">resetAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetCostCategory">resetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetDimension">resetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetNot">resetNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetOr">resetOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putAnd"></a>

```java
public void putAnd(IResolvable OR java.util.List<CeCostCategoryRuleRuleAnd> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putAnd.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>>

---

##### `putCostCategory` <a name="putCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putCostCategory"></a>

```java
public void putCostCategory(CeCostCategoryRuleRuleCostCategory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a>

---

##### `putDimension` <a name="putDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putDimension"></a>

```java
public void putDimension(CeCostCategoryRuleRuleDimension value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a>

---

##### `putNot` <a name="putNot" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putNot"></a>

```java
public void putNot(CeCostCategoryRuleRuleNot value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putNot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a>

---

##### `putOr` <a name="putOr" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putOr"></a>

```java
public void putOr(IResolvable OR java.util.List<CeCostCategoryRuleRuleOr> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putOr.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putTags"></a>

```java
public void putTags(CeCostCategoryRuleRuleTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a>

---

##### `resetAnd` <a name="resetAnd" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetAnd"></a>

```java
public void resetAnd()
```

##### `resetCostCategory` <a name="resetCostCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetCostCategory"></a>

```java
public void resetCostCategory()
```

##### `resetDimension` <a name="resetDimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetDimension"></a>

```java
public void resetDimension()
```

##### `resetNot` <a name="resetNot" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetNot"></a>

```java
public void resetNot()
```

##### `resetOr` <a name="resetOr" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetOr"></a>

```java
public void resetOr()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList">CeCostCategoryRuleRuleAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.costCategory">costCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference">CeCostCategoryRuleRuleCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference">CeCostCategoryRuleRuleDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference">CeCostCategoryRuleRuleNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.or">or</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList">CeCostCategoryRuleRuleOrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference">CeCostCategoryRuleRuleTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.andInput">andInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.costCategoryInput">costCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.dimensionInput">dimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.notInput">notInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.orInput">orInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.tagsInput">tagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.and"></a>

```java
public CeCostCategoryRuleRuleAndList getAnd();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAndList">CeCostCategoryRuleRuleAndList</a>

---

##### `costCategory`<sup>Required</sup> <a name="costCategory" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.costCategory"></a>

```java
public CeCostCategoryRuleRuleCostCategoryOutputReference getCostCategory();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategoryOutputReference">CeCostCategoryRuleRuleCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.dimension"></a>

```java
public CeCostCategoryRuleRuleDimensionOutputReference getDimension();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimensionOutputReference">CeCostCategoryRuleRuleDimensionOutputReference</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.not"></a>

```java
public CeCostCategoryRuleRuleNotOutputReference getNot();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNotOutputReference">CeCostCategoryRuleRuleNotOutputReference</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.or"></a>

```java
public CeCostCategoryRuleRuleOrList getOr();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOrList">CeCostCategoryRuleRuleOrList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.tags"></a>

```java
public CeCostCategoryRuleRuleTagsOutputReference getTags();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference">CeCostCategoryRuleRuleTagsOutputReference</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.andInput"></a>

```java
public java.lang.Object getAndInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleAnd">CeCostCategoryRuleRuleAnd</a>>

---

##### `costCategoryInput`<sup>Optional</sup> <a name="costCategoryInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.costCategoryInput"></a>

```java
public CeCostCategoryRuleRuleCostCategory getCostCategoryInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleCostCategory">CeCostCategoryRuleRuleCostCategory</a>

---

##### `dimensionInput`<sup>Optional</sup> <a name="dimensionInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.dimensionInput"></a>

```java
public CeCostCategoryRuleRuleDimension getDimensionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleDimension">CeCostCategoryRuleRuleDimension</a>

---

##### `notInput`<sup>Optional</sup> <a name="notInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.notInput"></a>

```java
public CeCostCategoryRuleRuleNot getNotInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleNot">CeCostCategoryRuleRuleNot</a>

---

##### `orInput`<sup>Optional</sup> <a name="orInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.orInput"></a>

```java
public java.lang.Object getOrInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOr">CeCostCategoryRuleRuleOr</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.tagsInput"></a>

```java
public CeCostCategoryRuleRuleTags getTagsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleOutputReference.property.internalValue"></a>

```java
public CeCostCategoryRuleRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRule">CeCostCategoryRuleRule</a>

---


### CeCostCategoryRuleRuleTagsOutputReference <a name="CeCostCategoryRuleRuleTagsOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategoryRuleRuleTagsOutputReference;

new CeCostCategoryRuleRuleTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetMatchOptions">resetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetMatchOptions` <a name="resetMatchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetMatchOptions"></a>

```java
public void resetMatchOptions()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.matchOptionsInput">matchOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.matchOptions">matchOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `matchOptionsInput`<sup>Optional</sup> <a name="matchOptionsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.matchOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMatchOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `matchOptions`<sup>Required</sup> <a name="matchOptions" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.matchOptions"></a>

```java
public java.util.List<java.lang.String> getMatchOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTagsOutputReference.property.internalValue"></a>

```java
public CeCostCategoryRuleRuleTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategoryRuleRuleTags">CeCostCategoryRuleRuleTags</a>

---


### CeCostCategorySplitChargeRuleList <a name="CeCostCategorySplitChargeRuleList" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategorySplitChargeRuleList;

new CeCostCategorySplitChargeRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.get"></a>

```java
public CeCostCategorySplitChargeRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a>>

---


### CeCostCategorySplitChargeRuleOutputReference <a name="CeCostCategorySplitChargeRuleOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategorySplitChargeRuleOutputReference;

new CeCostCategorySplitChargeRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.resetParameter">resetParameter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameter` <a name="putParameter" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.putParameter"></a>

```java
public void putParameter(IResolvable OR java.util.List<CeCostCategorySplitChargeRuleParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.putParameter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>>

---

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.resetParameter"></a>

```java
public void resetParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList">CeCostCategorySplitChargeRuleParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.parameterInput">parameterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.targetsInput">targetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.targets">targets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.parameter"></a>

```java
public CeCostCategorySplitChargeRuleParameterList getParameter();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList">CeCostCategorySplitChargeRuleParameterList</a>

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.parameterInput"></a>

```java
public java.lang.Object getParameterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.targetsInput"></a>

```java
public java.util.List<java.lang.String> getTargetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.targets"></a>

```java
public java.util.List<java.lang.String> getTargets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRule">CeCostCategorySplitChargeRule</a> OR com.hashicorp.cdktf.IResolvable

---


### CeCostCategorySplitChargeRuleParameterList <a name="CeCostCategorySplitChargeRuleParameterList" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategorySplitChargeRuleParameterList;

new CeCostCategorySplitChargeRuleParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.get"></a>

```java
public CeCostCategorySplitChargeRuleParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a>>

---


### CeCostCategorySplitChargeRuleParameterOutputReference <a name="CeCostCategorySplitChargeRuleParameterOutputReference" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ce_cost_category.CeCostCategorySplitChargeRuleParameterOutputReference;

new CeCostCategorySplitChargeRuleParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ceCostCategory.CeCostCategorySplitChargeRuleParameter">CeCostCategorySplitChargeRuleParameter</a> OR com.hashicorp.cdktf.IResolvable

---



