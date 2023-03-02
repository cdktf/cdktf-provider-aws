# `dataAwsConnectRoutingProfile` Submodule <a name="`dataAwsConnectRoutingProfile` Submodule" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectRoutingProfile <a name="DataAwsConnectRoutingProfile" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile aws_connect_routing_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer"></a>

```typescript
import { dataAwsConnectRoutingProfile } from '@cdktf/provider-aws'

new dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile(scope: Construct, id: string, config: DataAwsConnectRoutingProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig">DataAwsConnectRoutingProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig">DataAwsConnectRoutingProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetRoutingProfileId">resetRoutingProfileId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRoutingProfileId` <a name="resetRoutingProfileId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetRoutingProfileId"></a>

```typescript
public resetRoutingProfileId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isConstruct"></a>

```typescript
import { dataAwsConnectRoutingProfile } from '@cdktf/provider-aws'

dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformElement"></a>

```typescript
import { dataAwsConnectRoutingProfile } from '@cdktf/provider-aws'

dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformDataSource"></a>

```typescript
import { dataAwsConnectRoutingProfile } from '@cdktf/provider-aws'

dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.defaultOutboundQueueId">defaultOutboundQueueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.mediaConcurrencies">mediaConcurrencies</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList">DataAwsConnectRoutingProfileMediaConcurrenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.queueConfigs">queueConfigs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList">DataAwsConnectRoutingProfileQueueConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileIdInput">routingProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileId">routingProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `defaultOutboundQueueId`<sup>Required</sup> <a name="defaultOutboundQueueId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.defaultOutboundQueueId"></a>

```typescript
public readonly defaultOutboundQueueId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `mediaConcurrencies`<sup>Required</sup> <a name="mediaConcurrencies" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.mediaConcurrencies"></a>

```typescript
public readonly mediaConcurrencies: DataAwsConnectRoutingProfileMediaConcurrenciesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList">DataAwsConnectRoutingProfileMediaConcurrenciesList</a>

---

##### `queueConfigs`<sup>Required</sup> <a name="queueConfigs" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.queueConfigs"></a>

```typescript
public readonly queueConfigs: DataAwsConnectRoutingProfileQueueConfigsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList">DataAwsConnectRoutingProfileQueueConfigsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `routingProfileIdInput`<sup>Optional</sup> <a name="routingProfileIdInput" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileIdInput"></a>

```typescript
public readonly routingProfileIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `routingProfileId`<sup>Required</sup> <a name="routingProfileId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileId"></a>

```typescript
public readonly routingProfileId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectRoutingProfileConfig <a name="DataAwsConnectRoutingProfileConfig" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.Initializer"></a>

```typescript
import { dataAwsConnectRoutingProfile } from '@cdktf/provider-aws'

const dataAwsConnectRoutingProfileConfig: dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#instance_id DataAwsConnectRoutingProfile#instance_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#id DataAwsConnectRoutingProfile#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#name DataAwsConnectRoutingProfile#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.routingProfileId">routingProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#routing_profile_id DataAwsConnectRoutingProfile#routing_profile_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#tags DataAwsConnectRoutingProfile#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#instance_id DataAwsConnectRoutingProfile#instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#id DataAwsConnectRoutingProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#name DataAwsConnectRoutingProfile#name}.

---

##### `routingProfileId`<sup>Optional</sup> <a name="routingProfileId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.routingProfileId"></a>

```typescript
public readonly routingProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#routing_profile_id DataAwsConnectRoutingProfile#routing_profile_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_routing_profile#tags DataAwsConnectRoutingProfile#tags}.

---

### DataAwsConnectRoutingProfileMediaConcurrencies <a name="DataAwsConnectRoutingProfileMediaConcurrencies" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies.Initializer"></a>

```typescript
import { dataAwsConnectRoutingProfile } from '@cdktf/provider-aws'

const dataAwsConnectRoutingProfileMediaConcurrencies: dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies = { ... }
```


### DataAwsConnectRoutingProfileQueueConfigs <a name="DataAwsConnectRoutingProfileQueueConfigs" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs.Initializer"></a>

```typescript
import { dataAwsConnectRoutingProfile } from '@cdktf/provider-aws'

const dataAwsConnectRoutingProfileQueueConfigs: dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsConnectRoutingProfileMediaConcurrenciesList <a name="DataAwsConnectRoutingProfileMediaConcurrenciesList" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer"></a>

```typescript
import { dataAwsConnectRoutingProfile } from '@cdktf/provider-aws'

new dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.get"></a>

```typescript
public get(index: number): DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference <a name="DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectRoutingProfile } from '@cdktf/provider-aws'

new dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency">concurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies">DataAwsConnectRoutingProfileMediaConcurrencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `concurrency`<sup>Required</sup> <a name="concurrency" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency"></a>

```typescript
public readonly concurrency: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectRoutingProfileMediaConcurrencies;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies">DataAwsConnectRoutingProfileMediaConcurrencies</a>

---


### DataAwsConnectRoutingProfileQueueConfigsList <a name="DataAwsConnectRoutingProfileQueueConfigsList" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer"></a>

```typescript
import { dataAwsConnectRoutingProfile } from '@cdktf/provider-aws'

new dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.get"></a>

```typescript
public get(index: number): DataAwsConnectRoutingProfileQueueConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsConnectRoutingProfileQueueConfigsOutputReference <a name="DataAwsConnectRoutingProfileQueueConfigsOutputReference" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectRoutingProfile } from '@cdktf/provider-aws'

new dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.delay">delay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueArn">queueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueId">queueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueName">queueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs">DataAwsConnectRoutingProfileQueueConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueArn"></a>

```typescript
public readonly queueArn: string;
```

- *Type:* string

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectRoutingProfileQueueConfigs;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs">DataAwsConnectRoutingProfileQueueConfigs</a>

---



