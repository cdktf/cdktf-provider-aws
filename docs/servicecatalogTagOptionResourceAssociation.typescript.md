# `servicecatalogTagOptionResourceAssociation` Submodule <a name="`servicecatalogTagOptionResourceAssociation` Submodule" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogTagOptionResourceAssociation <a name="ServicecatalogTagOptionResourceAssociation" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association aws_servicecatalog_tag_option_resource_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer"></a>

```typescript
import { servicecatalogTagOptionResourceAssociation } from '@cdktf/provider-aws'

new servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation(scope: Construct, id: string, config: ServicecatalogTagOptionResourceAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig">ServicecatalogTagOptionResourceAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig">ServicecatalogTagOptionResourceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: ServicecatalogTagOptionResourceAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isConstruct"></a>

```typescript
import { servicecatalogTagOptionResourceAssociation } from '@cdktf/provider-aws'

servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformElement"></a>

```typescript
import { servicecatalogTagOptionResourceAssociation } from '@cdktf/provider-aws'

servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformResource"></a>

```typescript
import { servicecatalogTagOptionResourceAssociation } from '@cdktf/provider-aws'

servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceCreatedTime">resourceCreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceDescription">resourceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference">ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionIdInput">tagOptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionId">tagOptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `resourceCreatedTime`<sup>Required</sup> <a name="resourceCreatedTime" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceCreatedTime"></a>

```typescript
public readonly resourceCreatedTime: string;
```

- *Type:* string

---

##### `resourceDescription`<sup>Required</sup> <a name="resourceDescription" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceDescription"></a>

```typescript
public readonly resourceDescription: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference">ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `tagOptionIdInput`<sup>Optional</sup> <a name="tagOptionIdInput" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionIdInput"></a>

```typescript
public readonly tagOptionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ServicecatalogTagOptionResourceAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `tagOptionId`<sup>Required</sup> <a name="tagOptionId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionId"></a>

```typescript
public readonly tagOptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogTagOptionResourceAssociationConfig <a name="ServicecatalogTagOptionResourceAssociationConfig" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.Initializer"></a>

```typescript
import { servicecatalogTagOptionResourceAssociation } from '@cdktf/provider-aws'

const servicecatalogTagOptionResourceAssociationConfig: servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association#resource_id ServicecatalogTagOptionResourceAssociation#resource_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.tagOptionId">tagOptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association#tag_option_id ServicecatalogTagOptionResourceAssociation#tag_option_id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association#id ServicecatalogTagOptionResourceAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association#resource_id ServicecatalogTagOptionResourceAssociation#resource_id}.

---

##### `tagOptionId`<sup>Required</sup> <a name="tagOptionId" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.tagOptionId"></a>

```typescript
public readonly tagOptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association#tag_option_id ServicecatalogTagOptionResourceAssociation#tag_option_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association#id ServicecatalogTagOptionResourceAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServicecatalogTagOptionResourceAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association#timeouts ServicecatalogTagOptionResourceAssociation#timeouts}

---

### ServicecatalogTagOptionResourceAssociationTimeouts <a name="ServicecatalogTagOptionResourceAssociationTimeouts" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.Initializer"></a>

```typescript
import { servicecatalogTagOptionResourceAssociation } from '@cdktf/provider-aws'

const servicecatalogTagOptionResourceAssociationTimeouts: servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association#create ServicecatalogTagOptionResourceAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association#delete ServicecatalogTagOptionResourceAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association#read ServicecatalogTagOptionResourceAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association#create ServicecatalogTagOptionResourceAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association#delete ServicecatalogTagOptionResourceAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association#read ServicecatalogTagOptionResourceAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference <a name="ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { servicecatalogTagOptionResourceAssociation } from '@cdktf/provider-aws'

new servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServicecatalogTagOptionResourceAssociationTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationTimeouts">ServicecatalogTagOptionResourceAssociationTimeouts</a> | cdktf.IResolvable

---



