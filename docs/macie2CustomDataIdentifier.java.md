# `macie2CustomDataIdentifier` Submodule <a name="`macie2CustomDataIdentifier` Submodule" id="@cdktf/provider-aws.macie2CustomDataIdentifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2CustomDataIdentifier <a name="Macie2CustomDataIdentifier" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier aws_macie2_custom_data_identifier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_custom_data_identifier.Macie2CustomDataIdentifier;

Macie2CustomDataIdentifier.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ignoreWords(java.util.List<java.lang.String>)
//  .keywords(java.util.List<java.lang.String>)
//  .maximumMatchDistance(java.lang.Number)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .regex(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Macie2CustomDataIdentifierTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#description Macie2CustomDataIdentifier#description}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#id Macie2CustomDataIdentifier#id}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.ignoreWords">ignoreWords</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#ignore_words Macie2CustomDataIdentifier#ignore_words}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.keywords">keywords</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#keywords Macie2CustomDataIdentifier#keywords}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.maximumMatchDistance">maximumMatchDistance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#maximum_match_distance Macie2CustomDataIdentifier#maximum_match_distance}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#name Macie2CustomDataIdentifier#name}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#name_prefix Macie2CustomDataIdentifier#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#regex Macie2CustomDataIdentifier#regex}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#tags Macie2CustomDataIdentifier#tags}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#tags_all Macie2CustomDataIdentifier#tags_all}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts">Macie2CustomDataIdentifierTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#description Macie2CustomDataIdentifier#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#id Macie2CustomDataIdentifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreWords`<sup>Optional</sup> <a name="ignoreWords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.ignoreWords"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#ignore_words Macie2CustomDataIdentifier#ignore_words}.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.keywords"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#keywords Macie2CustomDataIdentifier#keywords}.

---

##### `maximumMatchDistance`<sup>Optional</sup> <a name="maximumMatchDistance" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.maximumMatchDistance"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#maximum_match_distance Macie2CustomDataIdentifier#maximum_match_distance}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#name Macie2CustomDataIdentifier#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#name_prefix Macie2CustomDataIdentifier#name_prefix}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.regex"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#regex Macie2CustomDataIdentifier#regex}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#region Macie2CustomDataIdentifier#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#tags Macie2CustomDataIdentifier#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#tags_all Macie2CustomDataIdentifier#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts">Macie2CustomDataIdentifierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#timeouts Macie2CustomDataIdentifier#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetIgnoreWords">resetIgnoreWords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetKeywords">resetKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetMaximumMatchDistance">resetMaximumMatchDistance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.putTimeouts"></a>

```java
public void putTimeouts(Macie2CustomDataIdentifierTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts">Macie2CustomDataIdentifierTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreWords` <a name="resetIgnoreWords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetIgnoreWords"></a>

```java
public void resetIgnoreWords()
```

##### `resetKeywords` <a name="resetKeywords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetKeywords"></a>

```java
public void resetKeywords()
```

##### `resetMaximumMatchDistance` <a name="resetMaximumMatchDistance" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetMaximumMatchDistance"></a>

```java
public void resetMaximumMatchDistance()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetRegex"></a>

```java
public void resetRegex()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Macie2CustomDataIdentifier resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_custom_data_identifier.Macie2CustomDataIdentifier;

Macie2CustomDataIdentifier.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_custom_data_identifier.Macie2CustomDataIdentifier;

Macie2CustomDataIdentifier.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_custom_data_identifier.Macie2CustomDataIdentifier;

Macie2CustomDataIdentifier.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_custom_data_identifier.Macie2CustomDataIdentifier;

Macie2CustomDataIdentifier.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Macie2CustomDataIdentifier.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Macie2CustomDataIdentifier resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Macie2CustomDataIdentifier to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Macie2CustomDataIdentifier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Macie2CustomDataIdentifier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference">Macie2CustomDataIdentifierTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWordsInput">ignoreWordsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywordsInput">keywordsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistanceInput">maximumMatchDistanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts">Macie2CustomDataIdentifierTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWords">ignoreWords</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywords">keywords</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistance">maximumMatchDistance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.timeouts"></a>

```java
public Macie2CustomDataIdentifierTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference">Macie2CustomDataIdentifierTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreWordsInput`<sup>Optional</sup> <a name="ignoreWordsInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWordsInput"></a>

```java
public java.util.List<java.lang.String> getIgnoreWordsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keywordsInput`<sup>Optional</sup> <a name="keywordsInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywordsInput"></a>

```java
public java.util.List<java.lang.String> getKeywordsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maximumMatchDistanceInput`<sup>Optional</sup> <a name="maximumMatchDistanceInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistanceInput"></a>

```java
public java.lang.Number getMaximumMatchDistanceInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts">Macie2CustomDataIdentifierTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreWords`<sup>Required</sup> <a name="ignoreWords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWords"></a>

```java
public java.util.List<java.lang.String> getIgnoreWords();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keywords`<sup>Required</sup> <a name="keywords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywords"></a>

```java
public java.util.List<java.lang.String> getKeywords();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maximumMatchDistance`<sup>Required</sup> <a name="maximumMatchDistance" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistance"></a>

```java
public java.lang.Number getMaximumMatchDistance();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2CustomDataIdentifierConfig <a name="Macie2CustomDataIdentifierConfig" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_custom_data_identifier.Macie2CustomDataIdentifierConfig;

Macie2CustomDataIdentifierConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ignoreWords(java.util.List<java.lang.String>)
//  .keywords(java.util.List<java.lang.String>)
//  .maximumMatchDistance(java.lang.Number)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .regex(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Macie2CustomDataIdentifierTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#description Macie2CustomDataIdentifier#description}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#id Macie2CustomDataIdentifier#id}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.ignoreWords">ignoreWords</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#ignore_words Macie2CustomDataIdentifier#ignore_words}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.keywords">keywords</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#keywords Macie2CustomDataIdentifier#keywords}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.maximumMatchDistance">maximumMatchDistance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#maximum_match_distance Macie2CustomDataIdentifier#maximum_match_distance}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#name Macie2CustomDataIdentifier#name}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#name_prefix Macie2CustomDataIdentifier#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#regex Macie2CustomDataIdentifier#regex}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#tags Macie2CustomDataIdentifier#tags}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#tags_all Macie2CustomDataIdentifier#tags_all}. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts">Macie2CustomDataIdentifierTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#description Macie2CustomDataIdentifier#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#id Macie2CustomDataIdentifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreWords`<sup>Optional</sup> <a name="ignoreWords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.ignoreWords"></a>

```java
public java.util.List<java.lang.String> getIgnoreWords();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#ignore_words Macie2CustomDataIdentifier#ignore_words}.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.keywords"></a>

```java
public java.util.List<java.lang.String> getKeywords();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#keywords Macie2CustomDataIdentifier#keywords}.

---

##### `maximumMatchDistance`<sup>Optional</sup> <a name="maximumMatchDistance" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.maximumMatchDistance"></a>

```java
public java.lang.Number getMaximumMatchDistance();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#maximum_match_distance Macie2CustomDataIdentifier#maximum_match_distance}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#name Macie2CustomDataIdentifier#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#name_prefix Macie2CustomDataIdentifier#name_prefix}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#regex Macie2CustomDataIdentifier#regex}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#region Macie2CustomDataIdentifier#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#tags Macie2CustomDataIdentifier#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#tags_all Macie2CustomDataIdentifier#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.timeouts"></a>

```java
public Macie2CustomDataIdentifierTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts">Macie2CustomDataIdentifierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#timeouts Macie2CustomDataIdentifier#timeouts}

---

### Macie2CustomDataIdentifierTimeouts <a name="Macie2CustomDataIdentifierTimeouts" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_custom_data_identifier.Macie2CustomDataIdentifierTimeouts;

Macie2CustomDataIdentifierTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#create Macie2CustomDataIdentifier#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/macie2_custom_data_identifier#create Macie2CustomDataIdentifier#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### Macie2CustomDataIdentifierTimeoutsOutputReference <a name="Macie2CustomDataIdentifierTimeoutsOutputReference" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.macie2_custom_data_identifier.Macie2CustomDataIdentifierTimeoutsOutputReference;

new Macie2CustomDataIdentifierTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts">Macie2CustomDataIdentifierTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts">Macie2CustomDataIdentifierTimeouts</a>

---



