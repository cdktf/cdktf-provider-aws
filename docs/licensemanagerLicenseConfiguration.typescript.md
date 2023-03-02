# `licensemanagerLicenseConfiguration` Submodule <a name="`licensemanagerLicenseConfiguration` Submodule" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerLicenseConfiguration <a name="LicensemanagerLicenseConfiguration" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration aws_licensemanager_license_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer"></a>

```typescript
import { licensemanagerLicenseConfiguration } from '@cdktf/provider-aws'

new licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration(scope: Construct, id: string, config: LicensemanagerLicenseConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig">LicensemanagerLicenseConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig">LicensemanagerLicenseConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCount">resetLicenseCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCountHardLimit">resetLicenseCountHardLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseRules">resetLicenseRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLicenseCount` <a name="resetLicenseCount" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCount"></a>

```typescript
public resetLicenseCount(): void
```

##### `resetLicenseCountHardLimit` <a name="resetLicenseCountHardLimit" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseCountHardLimit"></a>

```typescript
public resetLicenseCountHardLimit(): void
```

##### `resetLicenseRules` <a name="resetLicenseRules" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetLicenseRules"></a>

```typescript
public resetLicenseRules(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct"></a>

```typescript
import { licensemanagerLicenseConfiguration } from '@cdktf/provider-aws'

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement"></a>

```typescript
import { licensemanagerLicenseConfiguration } from '@cdktf/provider-aws'

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource"></a>

```typescript
import { licensemanagerLicenseConfiguration } from '@cdktf/provider-aws'

licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimitInput">licenseCountHardLimitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingTypeInput">licenseCountingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountInput">licenseCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRulesInput">licenseRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCount">licenseCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimit">licenseCountHardLimit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingType">licenseCountingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRules">licenseRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `licenseCountHardLimitInput`<sup>Optional</sup> <a name="licenseCountHardLimitInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimitInput"></a>

```typescript
public readonly licenseCountHardLimitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseCountingTypeInput`<sup>Optional</sup> <a name="licenseCountingTypeInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingTypeInput"></a>

```typescript
public readonly licenseCountingTypeInput: string;
```

- *Type:* string

---

##### `licenseCountInput`<sup>Optional</sup> <a name="licenseCountInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountInput"></a>

```typescript
public readonly licenseCountInput: number;
```

- *Type:* number

---

##### `licenseRulesInput`<sup>Optional</sup> <a name="licenseRulesInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRulesInput"></a>

```typescript
public readonly licenseRulesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseCount`<sup>Required</sup> <a name="licenseCount" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCount"></a>

```typescript
public readonly licenseCount: number;
```

- *Type:* number

---

##### `licenseCountHardLimit`<sup>Required</sup> <a name="licenseCountHardLimit" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountHardLimit"></a>

```typescript
public readonly licenseCountHardLimit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `licenseCountingType`<sup>Required</sup> <a name="licenseCountingType" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseCountingType"></a>

```typescript
public readonly licenseCountingType: string;
```

- *Type:* string

---

##### `licenseRules`<sup>Required</sup> <a name="licenseRules" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.licenseRules"></a>

```typescript
public readonly licenseRules: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerLicenseConfigurationConfig <a name="LicensemanagerLicenseConfigurationConfig" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.Initializer"></a>

```typescript
import { licensemanagerLicenseConfiguration } from '@cdktf/provider-aws'

const licensemanagerLicenseConfigurationConfig: licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountingType">licenseCountingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#name LicensemanagerLicenseConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#description LicensemanagerLicenseConfiguration#description}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#id LicensemanagerLicenseConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCount">licenseCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count LicensemanagerLicenseConfiguration#license_count}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountHardLimit">licenseCountHardLimit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseRules">licenseRules</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_rules LicensemanagerLicenseConfiguration#license_rules}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags LicensemanagerLicenseConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags_all LicensemanagerLicenseConfiguration#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `licenseCountingType`<sup>Required</sup> <a name="licenseCountingType" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountingType"></a>

```typescript
public readonly licenseCountingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_counting_type LicensemanagerLicenseConfiguration#license_counting_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#name LicensemanagerLicenseConfiguration#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#description LicensemanagerLicenseConfiguration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#id LicensemanagerLicenseConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseCount`<sup>Optional</sup> <a name="licenseCount" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCount"></a>

```typescript
public readonly licenseCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count LicensemanagerLicenseConfiguration#license_count}.

---

##### `licenseCountHardLimit`<sup>Optional</sup> <a name="licenseCountHardLimit" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseCountHardLimit"></a>

```typescript
public readonly licenseCountHardLimit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_count_hard_limit LicensemanagerLicenseConfiguration#license_count_hard_limit}.

---

##### `licenseRules`<sup>Optional</sup> <a name="licenseRules" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.licenseRules"></a>

```typescript
public readonly licenseRules: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#license_rules LicensemanagerLicenseConfiguration#license_rules}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags LicensemanagerLicenseConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.licensemanagerLicenseConfiguration.LicensemanagerLicenseConfigurationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/licensemanager_license_configuration#tags_all LicensemanagerLicenseConfiguration#tags_all}.

---



