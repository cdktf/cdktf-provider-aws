# `dataAwsAppconfigConfigurationProfile` Submodule <a name="`dataAwsAppconfigConfigurationProfile` Submodule" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppconfigConfigurationProfile <a name="DataAwsAppconfigConfigurationProfile" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile aws_appconfig_configuration_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer"></a>

```typescript
import { dataAwsAppconfigConfigurationProfile } from '@cdktf/provider-aws'

new dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile(scope: Construct, id: string, config: DataAwsAppconfigConfigurationProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig">DataAwsAppconfigConfigurationProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig">DataAwsAppconfigConfigurationProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isConstruct"></a>

```typescript
import { dataAwsAppconfigConfigurationProfile } from '@cdktf/provider-aws'

dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformElement"></a>

```typescript
import { dataAwsAppconfigConfigurationProfile } from '@cdktf/provider-aws'

dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformDataSource"></a>

```typescript
import { dataAwsAppconfigConfigurationProfile } from '@cdktf/provider-aws'

dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.retrievalRoleArn">retrievalRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.validator">validator</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList">DataAwsAppconfigConfigurationProfileValidatorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.configurationProfileIdInput">configurationProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.configurationProfileId">configurationProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retrievalRoleArn`<sup>Required</sup> <a name="retrievalRoleArn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.retrievalRoleArn"></a>

```typescript
public readonly retrievalRoleArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validator`<sup>Required</sup> <a name="validator" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.validator"></a>

```typescript
public readonly validator: DataAwsAppconfigConfigurationProfileValidatorList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList">DataAwsAppconfigConfigurationProfileValidatorList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `configurationProfileIdInput`<sup>Optional</sup> <a name="configurationProfileIdInput" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.configurationProfileIdInput"></a>

```typescript
public readonly configurationProfileIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.configurationProfileId"></a>

```typescript
public readonly configurationProfileId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppconfigConfigurationProfileConfig <a name="DataAwsAppconfigConfigurationProfileConfig" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.Initializer"></a>

```typescript
import { dataAwsAppconfigConfigurationProfile } from '@cdktf/provider-aws'

const dataAwsAppconfigConfigurationProfileConfig: dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#application_id DataAwsAppconfigConfigurationProfile#application_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.configurationProfileId">configurationProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#configuration_profile_id DataAwsAppconfigConfigurationProfile#configuration_profile_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#id DataAwsAppconfigConfigurationProfile#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#tags DataAwsAppconfigConfigurationProfile#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#application_id DataAwsAppconfigConfigurationProfile#application_id}.

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.configurationProfileId"></a>

```typescript
public readonly configurationProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#configuration_profile_id DataAwsAppconfigConfigurationProfile#configuration_profile_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#id DataAwsAppconfigConfigurationProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appconfig_configuration_profile#tags DataAwsAppconfigConfigurationProfile#tags}.

---

### DataAwsAppconfigConfigurationProfileValidator <a name="DataAwsAppconfigConfigurationProfileValidator" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidator.Initializer"></a>

```typescript
import { dataAwsAppconfigConfigurationProfile } from '@cdktf/provider-aws'

const dataAwsAppconfigConfigurationProfileValidator: dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidator = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAppconfigConfigurationProfileValidatorList <a name="DataAwsAppconfigConfigurationProfileValidatorList" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer"></a>

```typescript
import { dataAwsAppconfigConfigurationProfile } from '@cdktf/provider-aws'

new dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.get"></a>

```typescript
public get(index: number): DataAwsAppconfigConfigurationProfileValidatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAppconfigConfigurationProfileValidatorOutputReference <a name="DataAwsAppconfigConfigurationProfileValidatorOutputReference" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer"></a>

```typescript
import { dataAwsAppconfigConfigurationProfile } from '@cdktf/provider-aws'

new dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidator">DataAwsAppconfigConfigurationProfileValidator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAppconfigConfigurationProfileValidator;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppconfigConfigurationProfile.DataAwsAppconfigConfigurationProfileValidator">DataAwsAppconfigConfigurationProfileValidator</a>

---



