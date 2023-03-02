# `wafv2RegexPatternSet` Submodule <a name="`wafv2RegexPatternSet` Submodule" id="@cdktf/provider-aws.wafv2RegexPatternSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Wafv2RegexPatternSet <a name="Wafv2RegexPatternSet" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set aws_wafv2_regex_pattern_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafv2_regex_pattern_set.Wafv2RegexPatternSet;

Wafv2RegexPatternSet.Builder.create(Construct scope, java.lang.String id)
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
    .scope(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .regularExpression(IResolvable)
//  .regularExpression(java.util.List<Wafv2RegexPatternSetRegularExpression>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#name Wafv2RegexPatternSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#scope Wafv2RegexPatternSet#scope}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#description Wafv2RegexPatternSet#description}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#id Wafv2RegexPatternSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.regularExpression">regularExpression</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>></code> | regular_expression block. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags Wafv2RegexPatternSet#tags}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags_all Wafv2RegexPatternSet#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#name Wafv2RegexPatternSet#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#scope Wafv2RegexPatternSet#scope}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#description Wafv2RegexPatternSet#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#id Wafv2RegexPatternSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regularExpression`<sup>Optional</sup> <a name="regularExpression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.regularExpression"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>>

regular_expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#regular_expression Wafv2RegexPatternSet#regular_expression}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags Wafv2RegexPatternSet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags_all Wafv2RegexPatternSet#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.putRegularExpression">putRegularExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetRegularExpression">resetRegularExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRegularExpression` <a name="putRegularExpression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.putRegularExpression"></a>

```java
public void putRegularExpression(IResolvable OR java.util.List<Wafv2RegexPatternSetRegularExpression> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.putRegularExpression.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetId"></a>

```java
public void resetId()
```

##### `resetRegularExpression` <a name="resetRegularExpression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetRegularExpression"></a>

```java
public void resetRegularExpression()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafv2_regex_pattern_set.Wafv2RegexPatternSet;

Wafv2RegexPatternSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafv2_regex_pattern_set.Wafv2RegexPatternSet;

Wafv2RegexPatternSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafv2_regex_pattern_set.Wafv2RegexPatternSet;

Wafv2RegexPatternSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.lockToken">lockToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpression">regularExpression</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList">Wafv2RegexPatternSetRegularExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpressionInput">regularExpressionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `lockToken`<sup>Required</sup> <a name="lockToken" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.lockToken"></a>

```java
public java.lang.String getLockToken();
```

- *Type:* java.lang.String

---

##### `regularExpression`<sup>Required</sup> <a name="regularExpression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpression"></a>

```java
public Wafv2RegexPatternSetRegularExpressionList getRegularExpression();
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList">Wafv2RegexPatternSetRegularExpressionList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regularExpressionInput`<sup>Optional</sup> <a name="regularExpressionInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.regularExpressionInput"></a>

```java
public java.lang.Object getRegularExpressionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Wafv2RegexPatternSetConfig <a name="Wafv2RegexPatternSetConfig" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafv2_regex_pattern_set.Wafv2RegexPatternSetConfig;

Wafv2RegexPatternSetConfig.builder()
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
    .scope(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .regularExpression(IResolvable)
//  .regularExpression(java.util.List<Wafv2RegexPatternSetRegularExpression>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#name Wafv2RegexPatternSet#name}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#scope Wafv2RegexPatternSet#scope}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#description Wafv2RegexPatternSet#description}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#id Wafv2RegexPatternSet#id}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.regularExpression">regularExpression</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>></code> | regular_expression block. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags Wafv2RegexPatternSet#tags}. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags_all Wafv2RegexPatternSet#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#name Wafv2RegexPatternSet#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#scope Wafv2RegexPatternSet#scope}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#description Wafv2RegexPatternSet#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#id Wafv2RegexPatternSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regularExpression`<sup>Optional</sup> <a name="regularExpression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.regularExpression"></a>

```java
public java.lang.Object getRegularExpression();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>>

regular_expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#regular_expression Wafv2RegexPatternSet#regular_expression}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags Wafv2RegexPatternSet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#tags_all Wafv2RegexPatternSet#tags_all}.

---

### Wafv2RegexPatternSetRegularExpression <a name="Wafv2RegexPatternSetRegularExpression" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafv2_regex_pattern_set.Wafv2RegexPatternSetRegularExpression;

Wafv2RegexPatternSetRegularExpression.builder()
    .regexString(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression.property.regexString">regexString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#regex_string Wafv2RegexPatternSet#regex_string}. |

---

##### `regexString`<sup>Required</sup> <a name="regexString" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression.property.regexString"></a>

```java
public java.lang.String getRegexString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_regex_pattern_set#regex_string Wafv2RegexPatternSet#regex_string}.

---

## Classes <a name="Classes" id="Classes"></a>

### Wafv2RegexPatternSetRegularExpressionList <a name="Wafv2RegexPatternSetRegularExpressionList" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafv2_regex_pattern_set.Wafv2RegexPatternSetRegularExpressionList;

new Wafv2RegexPatternSetRegularExpressionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.get"></a>

```java
public Wafv2RegexPatternSetRegularExpressionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a>>

---


### Wafv2RegexPatternSetRegularExpressionOutputReference <a name="Wafv2RegexPatternSetRegularExpressionOutputReference" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.wafv2_regex_pattern_set.Wafv2RegexPatternSetRegularExpressionOutputReference;

new Wafv2RegexPatternSetRegularExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.regexStringInput">regexStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.regexString">regexString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regexStringInput`<sup>Optional</sup> <a name="regexStringInput" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.regexStringInput"></a>

```java
public java.lang.String getRegexStringInput();
```

- *Type:* java.lang.String

---

##### `regexString`<sup>Required</sup> <a name="regexString" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.regexString"></a>

```java
public java.lang.String getRegexString();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpressionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.wafv2RegexPatternSet.Wafv2RegexPatternSetRegularExpression">Wafv2RegexPatternSetRegularExpression</a> OR com.hashicorp.cdktf.IResolvable

---



