# `dataAwsGlobalacceleratorAccelerator` Submodule <a name="`dataAwsGlobalacceleratorAccelerator` Submodule" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlobalacceleratorAccelerator <a name="DataAwsGlobalacceleratorAccelerator" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator aws_globalaccelerator_accelerator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorAccelerator } from '@cdktf/provider-aws'

new dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator(scope: Construct, id: string, config?: DataAwsGlobalacceleratorAcceleratorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig">DataAwsGlobalacceleratorAcceleratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig">DataAwsGlobalacceleratorAcceleratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetArn` <a name="resetArn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isConstruct"></a>

```typescript
import { dataAwsGlobalacceleratorAccelerator } from '@cdktf/provider-aws'

dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformElement"></a>

```typescript
import { dataAwsGlobalacceleratorAccelerator } from '@cdktf/provider-aws'

dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformDataSource"></a>

```typescript
import { dataAwsGlobalacceleratorAccelerator } from '@cdktf/provider-aws'

dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList">DataAwsGlobalacceleratorAcceleratorAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.ipSets">ipSets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList">DataAwsGlobalacceleratorAcceleratorIpSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.attributes"></a>

```typescript
public readonly attributes: DataAwsGlobalacceleratorAcceleratorAttributesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList">DataAwsGlobalacceleratorAcceleratorAttributesList</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `ipSets`<sup>Required</sup> <a name="ipSets" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.ipSets"></a>

```typescript
public readonly ipSets: DataAwsGlobalacceleratorAcceleratorIpSetsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList">DataAwsGlobalacceleratorAcceleratorIpSetsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAccelerator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlobalacceleratorAcceleratorAttributes <a name="DataAwsGlobalacceleratorAcceleratorAttributes" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributes.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorAccelerator } from '@cdktf/provider-aws'

const dataAwsGlobalacceleratorAcceleratorAttributes: dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributes = { ... }
```


### DataAwsGlobalacceleratorAcceleratorConfig <a name="DataAwsGlobalacceleratorAcceleratorConfig" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorAccelerator } from '@cdktf/provider-aws'

const dataAwsGlobalacceleratorAcceleratorConfig: dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#arn DataAwsGlobalacceleratorAccelerator#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#id DataAwsGlobalacceleratorAccelerator#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#name DataAwsGlobalacceleratorAccelerator#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#arn DataAwsGlobalacceleratorAccelerator#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#id DataAwsGlobalacceleratorAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator#name DataAwsGlobalacceleratorAccelerator#name}.

---

### DataAwsGlobalacceleratorAcceleratorIpSets <a name="DataAwsGlobalacceleratorAcceleratorIpSets" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSets.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorAccelerator } from '@cdktf/provider-aws'

const dataAwsGlobalacceleratorAcceleratorIpSets: dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlobalacceleratorAcceleratorAttributesList <a name="DataAwsGlobalacceleratorAcceleratorAttributesList" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorAccelerator } from '@cdktf/provider-aws'

new dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.get"></a>

```typescript
public get(index: number): DataAwsGlobalacceleratorAcceleratorAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsGlobalacceleratorAcceleratorAttributesOutputReference <a name="DataAwsGlobalacceleratorAcceleratorAttributesOutputReference" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorAccelerator } from '@cdktf/provider-aws'

new dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabled">flowLogsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Bucket">flowLogsS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Prefix">flowLogsS3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributes">DataAwsGlobalacceleratorAcceleratorAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowLogsEnabled`<sup>Required</sup> <a name="flowLogsEnabled" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsEnabled"></a>

```typescript
public readonly flowLogsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `flowLogsS3Bucket`<sup>Required</sup> <a name="flowLogsS3Bucket" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Bucket"></a>

```typescript
public readonly flowLogsS3Bucket: string;
```

- *Type:* string

---

##### `flowLogsS3Prefix`<sup>Required</sup> <a name="flowLogsS3Prefix" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.flowLogsS3Prefix"></a>

```typescript
public readonly flowLogsS3Prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsGlobalacceleratorAcceleratorAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorAttributes">DataAwsGlobalacceleratorAcceleratorAttributes</a>

---


### DataAwsGlobalacceleratorAcceleratorIpSetsList <a name="DataAwsGlobalacceleratorAcceleratorIpSetsList" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorAccelerator } from '@cdktf/provider-aws'

new dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.get"></a>

```typescript
public get(index: number): DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference <a name="DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer"></a>

```typescript
import { dataAwsGlobalacceleratorAccelerator } from '@cdktf/provider-aws'

new dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.ipFamily">ipFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSets">DataAwsGlobalacceleratorAcceleratorIpSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `ipFamily`<sup>Required</sup> <a name="ipFamily" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.ipFamily"></a>

```typescript
public readonly ipFamily: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsGlobalacceleratorAcceleratorIpSets;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorAccelerator.DataAwsGlobalacceleratorAcceleratorIpSets">DataAwsGlobalacceleratorAcceleratorIpSets</a>

---



