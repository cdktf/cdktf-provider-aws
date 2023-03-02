# `dataAwsDirectoryServiceDirectory` Submodule <a name="`dataAwsDirectoryServiceDirectory` Submodule" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDirectoryServiceDirectory <a name="DataAwsDirectoryServiceDirectory" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory aws_directory_service_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer"></a>

```typescript
import { dataAwsDirectoryServiceDirectory } from '@cdktf/provider-aws'

new dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory(scope: Construct, id: string, config: DataAwsDirectoryServiceDirectoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig">DataAwsDirectoryServiceDirectoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig">DataAwsDirectoryServiceDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isConstruct"></a>

```typescript
import { dataAwsDirectoryServiceDirectory } from '@cdktf/provider-aws'

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isTerraformElement"></a>

```typescript
import { dataAwsDirectoryServiceDirectory } from '@cdktf/provider-aws'

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isTerraformDataSource"></a>

```typescript
import { dataAwsDirectoryServiceDirectory } from '@cdktf/provider-aws'

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.accessUrl">accessUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.connectSettings">connectSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList">DataAwsDirectoryServiceDirectoryConnectSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.enableSso">enableSso</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.radiusSettings">radiusSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList">DataAwsDirectoryServiceDirectoryRadiusSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList">DataAwsDirectoryServiceDirectoryVpcSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessUrl`<sup>Required</sup> <a name="accessUrl" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.accessUrl"></a>

```typescript
public readonly accessUrl: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `connectSettings`<sup>Required</sup> <a name="connectSettings" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.connectSettings"></a>

```typescript
public readonly connectSettings: DataAwsDirectoryServiceDirectoryConnectSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList">DataAwsDirectoryServiceDirectoryConnectSettingsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.dnsIpAddresses"></a>

```typescript
public readonly dnsIpAddresses: string[];
```

- *Type:* string[]

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `enableSso`<sup>Required</sup> <a name="enableSso" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.enableSso"></a>

```typescript
public readonly enableSso: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `radiusSettings`<sup>Required</sup> <a name="radiusSettings" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.radiusSettings"></a>

```typescript
public readonly radiusSettings: DataAwsDirectoryServiceDirectoryRadiusSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList">DataAwsDirectoryServiceDirectoryRadiusSettingsList</a>

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.vpcSettings"></a>

```typescript
public readonly vpcSettings: DataAwsDirectoryServiceDirectoryVpcSettingsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList">DataAwsDirectoryServiceDirectoryVpcSettingsList</a>

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDirectoryServiceDirectoryConfig <a name="DataAwsDirectoryServiceDirectoryConfig" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.Initializer"></a>

```typescript
import { dataAwsDirectoryServiceDirectory } from '@cdktf/provider-aws'

const dataAwsDirectoryServiceDirectoryConfig: dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#directory_id DataAwsDirectoryServiceDirectory#directory_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#id DataAwsDirectoryServiceDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#tags DataAwsDirectoryServiceDirectory#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#directory_id DataAwsDirectoryServiceDirectory#directory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#id DataAwsDirectoryServiceDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#tags DataAwsDirectoryServiceDirectory#tags}.

---

### DataAwsDirectoryServiceDirectoryConnectSettings <a name="DataAwsDirectoryServiceDirectoryConnectSettings" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettings.Initializer"></a>

```typescript
import { dataAwsDirectoryServiceDirectory } from '@cdktf/provider-aws'

const dataAwsDirectoryServiceDirectoryConnectSettings: dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettings = { ... }
```


### DataAwsDirectoryServiceDirectoryRadiusSettings <a name="DataAwsDirectoryServiceDirectoryRadiusSettings" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettings.Initializer"></a>

```typescript
import { dataAwsDirectoryServiceDirectory } from '@cdktf/provider-aws'

const dataAwsDirectoryServiceDirectoryRadiusSettings: dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettings = { ... }
```


### DataAwsDirectoryServiceDirectoryVpcSettings <a name="DataAwsDirectoryServiceDirectoryVpcSettings" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettings.Initializer"></a>

```typescript
import { dataAwsDirectoryServiceDirectory } from '@cdktf/provider-aws'

const dataAwsDirectoryServiceDirectoryVpcSettings: dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDirectoryServiceDirectoryConnectSettingsList <a name="DataAwsDirectoryServiceDirectoryConnectSettingsList" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.Initializer"></a>

```typescript
import { dataAwsDirectoryServiceDirectory } from '@cdktf/provider-aws'

new dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.get"></a>

```typescript
public get(index: number): DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference <a name="DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsDirectoryServiceDirectory } from '@cdktf/provider-aws'

new dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.connectIps">connectIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIps">customerDnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsername">customerUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettings">DataAwsDirectoryServiceDirectoryConnectSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `connectIps`<sup>Required</sup> <a name="connectIps" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.connectIps"></a>

```typescript
public readonly connectIps: string[];
```

- *Type:* string[]

---

##### `customerDnsIps`<sup>Required</sup> <a name="customerDnsIps" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIps"></a>

```typescript
public readonly customerDnsIps: string[];
```

- *Type:* string[]

---

##### `customerUsername`<sup>Required</sup> <a name="customerUsername" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsername"></a>

```typescript
public readonly customerUsername: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDirectoryServiceDirectoryConnectSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettings">DataAwsDirectoryServiceDirectoryConnectSettings</a>

---


### DataAwsDirectoryServiceDirectoryRadiusSettingsList <a name="DataAwsDirectoryServiceDirectoryRadiusSettingsList" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.Initializer"></a>

```typescript
import { dataAwsDirectoryServiceDirectory } from '@cdktf/provider-aws'

new dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.get"></a>

```typescript
public get(index: number): DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference <a name="DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsDirectoryServiceDirectory } from '@cdktf/provider-aws'

new dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.authenticationProtocol">authenticationProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.displayLabel">displayLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusPort">radiusPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusRetries">radiusRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusServers">radiusServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusTimeout">radiusTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.useSameUsername">useSameUsername</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettings">DataAwsDirectoryServiceDirectoryRadiusSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationProtocol`<sup>Required</sup> <a name="authenticationProtocol" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.authenticationProtocol"></a>

```typescript
public readonly authenticationProtocol: string;
```

- *Type:* string

---

##### `displayLabel`<sup>Required</sup> <a name="displayLabel" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.displayLabel"></a>

```typescript
public readonly displayLabel: string;
```

- *Type:* string

---

##### `radiusPort`<sup>Required</sup> <a name="radiusPort" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusPort"></a>

```typescript
public readonly radiusPort: number;
```

- *Type:* number

---

##### `radiusRetries`<sup>Required</sup> <a name="radiusRetries" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusRetries"></a>

```typescript
public readonly radiusRetries: number;
```

- *Type:* number

---

##### `radiusServers`<sup>Required</sup> <a name="radiusServers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusServers"></a>

```typescript
public readonly radiusServers: string[];
```

- *Type:* string[]

---

##### `radiusTimeout`<sup>Required</sup> <a name="radiusTimeout" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusTimeout"></a>

```typescript
public readonly radiusTimeout: number;
```

- *Type:* number

---

##### `useSameUsername`<sup>Required</sup> <a name="useSameUsername" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.useSameUsername"></a>

```typescript
public readonly useSameUsername: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDirectoryServiceDirectoryRadiusSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettings">DataAwsDirectoryServiceDirectoryRadiusSettings</a>

---


### DataAwsDirectoryServiceDirectoryVpcSettingsList <a name="DataAwsDirectoryServiceDirectoryVpcSettingsList" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.Initializer"></a>

```typescript
import { dataAwsDirectoryServiceDirectory } from '@cdktf/provider-aws'

new dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.get"></a>

```typescript
public get(index: number): DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference <a name="DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsDirectoryServiceDirectory } from '@cdktf/provider-aws'

new dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettings">DataAwsDirectoryServiceDirectoryVpcSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsDirectoryServiceDirectoryVpcSettings;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettings">DataAwsDirectoryServiceDirectoryVpcSettings</a>

---



